const {Router} = require("express")
const User = require("../models/User")

const router = Router()
router.post("/registration", async (res, req) => {
  try{
    const {userName, password} = res.body

    const isUsed = await User.findOne({userName})

    if(isUsed){
      return JSON.stringify({message: "Пользователь уже есть"})
    }

    const user = new User({
      userName, password
    })

    await user.save()

    res.status(201).json({message: "Пользователь создан"})
  }catch (error){
    console.log(error)
  }
})

module.exports = router