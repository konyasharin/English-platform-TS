// Модуль содержит контроллер для работы с модулями в базе данных

import ModuleModel from "../models/Module.js"

export const createModule = async (request, response) => {
    try{
        const doc = new ModuleModel({
            name: request.body.name,
            modules: request.body.modules
        })

        const module = await doc.save()

        response.json({
            ...module
        })
    } catch (error){
        console.log(error)
        response.status(500).json({
            message: "Не удалось создать модуль",
            ...request.body
        })
    }

}