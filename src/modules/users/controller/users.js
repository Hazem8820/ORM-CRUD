import { Op } from "sequelize"
import { userModel } from "../../../../DB/model/user.model.js"
import { sequelize } from "../../../../DB/connection.js"

export const getUsers = async (req, res, next) => {
    try {
        const users = await userModel.findAll()
        return res.json({ message: "success", users })
    } catch (error) {
        return res.json({ message: "failed", error: error?.message })
    }
}

export const signup = async (req, res, next) => {
    try {
        const users = await userModel.findOne({ where: { email: req.body.email } })
        if (users) {
            return res.json({ message: "failed", reason: "account already exist" })
        }
        const insert = await userModel.create(req.body, { fields: ['name', 'email', 'password', 'age'] })
        return res.json({ message: "success", insert })
    } catch (error) {
        return res.json({ message: "failed", error: error?.message })
    }
}

export const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const users = await userModel.findOne({ where: { email, password } })
        return users ? res.json({ message: "success", reason: `welcome back ${users?.name}` }) : res.json({ message: "failed", reason: `Incorrect email or password` })
    } catch (error) {
        return res.json({ message: "failed", error: error?.message })
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const { name, email, password, age } = req.body
        const user = await userModel.update({ name, password, age }, { where: { id: req.params.id, email } })
        return user[0] ? res.json({ message: "success", info: "user's data has been updated" }) : res.json({ message: "failed", reason: "something went wrong please try again" })
    } catch (error) {
        return res.json({ message: "failed", error: error?.message })
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const user = await userModel.destroy({ where: { id: req.params.id } })
        return user ? res.json({ message: "success", info: "user has been deleted" }) : res.json({ message: "failed", reason: "In-Valid user Id" })
    } catch (error) {
        return res.json({ message: "failed", error: error?.message })
    }
}

export const searchByChar = async (req, res, next) => {
    try {
        const { char, age } = req.params
        const users = await userModel.findAll({ where: { name: {  [Op.like]: `${char}%` }, age: { [Op.lt]: age } } })
        return users.length ? res.json({ message: "success", users }) : res.json({ message: "failed", reason: `there is no user have ${age} years old or starts with ${char}` })
    } catch (error) {
        return res.json({ message: "failed", error: error?.message })
    }
}

export const searchByAge = async (req, res, next) => {
    try {
        const { age1, age2 } = req.params
        const users = await userModel.findAll({ where: { age: { [Op.between]: [age1, age2] } } })
        return users.length ? res.json({ message: "success", users }) : res.json({ message: "failed", reason: `there is no user his age between ${age1} & ${age2}` })
    } catch (error) {
        return res.json({ message: "failed", error: error?.message })
    }
}

export const oldestUsers = async (req, res, next) => {
    const users = await userModel.findAll({ limit: 3, order: [[sequelize.col('age'), 'DESC']] })
    return res.json({ message: "success", users })
}

export const searchByid = async (req, res, next) => {
    try {
        const user = await userModel.findAll({ where: { id: { [Op.in]: [req.params.id] } } })
        return user.length ? res.json({ message: "success", user }) : res.json({ message: "failed", reason: `there is no user with this id = ${req.params.id}` })
    } catch (error) {
        res.json({ message: "failed", error: error?.message })
    }
}
