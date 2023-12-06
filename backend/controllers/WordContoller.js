import WordModel from "../models/Word.js"

export const getWord = async (request, response) => {
    try {
        const words = WordModel.find({ word: request.body.word })
        console.log(words)
        response.json({
            ...words._doc
        })
    } catch{

    }
}