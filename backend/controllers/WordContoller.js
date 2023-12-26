/**
 * Модуль содержит контроллер для работы со словами в базе данных
 */

import WordModel from "../models/Word.js"

/**
 * Асинхронный метод для получения слов из базы данных (на вход идет часть слова по которой проводится поиск)
 */
export const getWord = async (request, response) => {
    try {
        const words = await WordModel.find({ word: { $regex: request.params.partWord } }) // поиск слов включающих request.params.partWord

        response.json({
            words
        })
    } catch(error){
        console.log(error)
        response.status(500).json({
            message: "Ошибка! Не удалось получить слово"
        })
    }
}