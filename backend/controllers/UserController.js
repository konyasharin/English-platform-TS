import bcrypt from "bcrypt";
import UserModel from "../models/User.js";
import jwt from "jsonwebtoken";

export const registration = async (request, response) => {
  try {
    const salt = await bcrypt.genSalt(10),
      hash = await bcrypt.hash(request.body.password, salt)

    const doc = new UserModel({
      userName: request.body.userName,
      passwordHash: hash,
      modules: []
    })

    const user = await doc.save()

    const token = jwt.sign({
        _id: user._id
      },
      process.env.SECRET_KEY_FOR_TOKEN,
      {
        expiresIn: "30d" // время действия ключа для расшифровки
      })

    const { passwordHash, ...userData } = user._doc

    response.json({
      ...userData,
      token
    })
  }catch (error){
    console.log(error)
    response.status(500).json({
      message: "Не удалось зарегистрироваться"
    })
  }

}

export const login = async (request, response) => {
  try {
    const user = await UserModel.findOne({userName: request.body.userName})

    if (!user){
      return response.status(400).json({
        message: "Неверный логин или пароль" // Для безопасности не указывается что именно неверно (более медленный подбор данных для входа)
      })
    }

    const isCorrectPassword = await bcrypt.compare(request.body.password, user._doc.passwordHash)

    if (!isCorrectPassword){
      return response.status(400).json({
        message: "Неверный логин или пароль"
      })
    }

    const token = jwt.sign({
        _id: user._id
      },
      process.env.SECRET_KEY_FOR_TOKEN,
      {
        expiresIn: "30d" // время действия ключа для расшифровки
      })

    const { passwordHash, ...userData } = user._doc

    response.json({
      ...userData,
      token
    })
  }catch (error){
    console.log(error)
    response.status(500).json({
      message: "Не удалось войти"
    })
  }
}

export const getMe = async (request, response) => {
  try {
    const user = await UserModel.findById(request.userId)

    if(!user){
      return response.status(404).json({
        message: "Пользователь не найден"
      })
    }

    const {passwordHash, ...userData} = user._doc

    response.json({
      ...userData
    })
  } catch (error){
    console.log(error)
    response.status(500).json({
      message: "Нет доступа"
    })
  }
}