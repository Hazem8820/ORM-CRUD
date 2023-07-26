import { noteModel } from "../../../../DB/model/note.model.js"
import { userModel } from "../../../../DB/model/user.model.js"

export const getNotes = async (req, res, next) => {
    try {
        const notes = await noteModel.findAll()
        return res.json({ message: "success", notes })
    } catch (error) {
        res.json({ message: "failed", error: error?.message })
    }
}

export const addNotes = async (req, res, next) => {
    try {
        const { title, description, userId } = req.body
        const checkUser = await userModel.findOne({ where: { id: userId } })
        if (!checkUser) {
            return res.json({ message: "failed", reason: `there is no user with this id = ${userId}` })
        } else {
            const notes = await noteModel.create({ title, description, userId })
            return res.json({ message: "success", notes })
        }
    } catch (error) {
        return res.json({ message: "failed", error: error?.message })
    }
}

export const deleteNote = async (req, res, next) => {
    try {
        const notes = await noteModel.destroy({ where: { id: req.params.id, userId: req.body.userId } })
        return notes ? res.json({ message: "success", info: "data has been deleted" }) : res.json({ message: "failed", reason: `In-valid user id = ${req.body.userId} or In-valid notes id = ${req.params.id}` })
    } catch (error) {
        return res.json({ message: "failed", error: error?.message })
    }
}

export const updateNote = async (req, res, next) => {
    try {
        const { title, description, userId } = req.body
        const notes = await noteModel.update({ title, description }, { where: { id: req.params.id, userId } })
        return notes[0] ? res.json({ message: "success", info: "note has been updated" }) : res.json({ message: "failed", reason: `In-valid user id = ${userId} or In-valid notes id = ${req.params.id}` })
    } catch (error) {
        return res.json({ message: "failed", error: error?.message })
    }
}

export const getBoth = async (req, res, next) => {
    try {
        const both = await userModel.findAll({ include: { model: noteModel } })
        return res.json({ message: "success", both })
    } catch (error) {
        return res.json({ message: "failed", error: error?.message })
    }
}
