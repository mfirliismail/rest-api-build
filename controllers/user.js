const { users } = require('../models')
const joi = require('joi')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
module.exports = {
    post: async(req, res) => {
        const body = req.body
        try {
            const schema = joi.object({
                username: joi.string().required(),
                email: joi.string().required(),
                password: joi.string().min(6).required()
            })

            const { error } = schema.validate({...body }, { abortEarly: false })

            if (error) {
                return res.status(400).json({
                    status: "failed",
                    message: "Please insert a username or password"
                })
            }

            const checkEmail = await users.findOne({
                where: {
                    email: checkEmail.dataValues.email
                }
            })

            if (checkEmail) {
                return res.status(400).json({
                    status: "failed",
                    message: "Username or Email already in use"
                })
            }

            bcrypt.hash(body.password, 10, async(err, hash) => {
                const userCreate = await users.create({
                    username: body.username,
                    email: body.email,
                    password: hash
                })


                return res.status(200).json({
                    status: "success",
                    message: "success create user"
                })

            })




        } catch (error) {
            console.log(error)
            return res.status(200).json({
                status: "failed",
                message: "Internal Server Error"
            })
        }
    }
}