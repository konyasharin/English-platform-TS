import UserModel from "../models/User.js";
import FolderModel from "../models/Folder.js"

export const createFolder = async (request, response) => {
  try{
    const user = await UserModel.findOne({userName: request.body.userName})
    const folder = new FolderModel({
      name: request.body.name,
      modules: request.body.modules
    })

    await folder.save()

    user.folders = [
      ...user.folders,
      folder
    ]

    await user.save()

    response.json({
      ...folder._doc
    })
  } catch (error) {
    console.log(error)
    response.status(500).json({
      message: "Не удалось создать папку"
    })
  }
}