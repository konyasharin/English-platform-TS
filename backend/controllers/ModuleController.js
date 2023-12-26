/**
 * Модуль содержит контроллер для работы с модулями в базе данных
 */

import UserModel from "../models/User.js"
import ModuleModel from "../models/Module.js"

/**
 * Асинхронный метод для создания нового модуля в базе данных
 */
export const createModule = async (request, response) => {
    try{
        const user = await UserModel.findOne({userName: request.body.userName})
        const module = new ModuleModel({
            name: request.body.name,
            words: request.body.words
        })

        await module.save()

         user.modules = [
            ...user.modules,
            module
        ]

        await user.save()

        response.json({
            ...module._doc
        })
    } catch (error){
        console.log(error)
        response.status(500).json({
            message: "Не удалось создать модуль"
        })
    }
}
