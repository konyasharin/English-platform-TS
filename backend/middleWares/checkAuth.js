/**
 * Модуль содержит middleWare для проверки аутентификации пользователя
 */

import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()

/**
 * middle ware для проверки правильности токена и расшифровки его в id пользователя,
 * переходит потом к получению данных пользователя
 */
const checkAuth = (request, response, next) => {
  const token = (request.headers.authorization || "").replace(/Bearer\s?/, "")

  if (token){
    try{
      const decoded = jwt.verify(token, process.env.SECRET_KEY_FOR_TOKEN)
      request.userId = decoded._id
      next()
    } catch (error){
      return response.status(403).json({
        message: "Нет доступа"
      })
    }
  }else {
    return response.status(403).json({
      message: "Нет доступа"
    })
  }
}

export default checkAuth