import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { noteModel } from "./note.model.js";

export const userModel = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
userModel.hasMany(noteModel, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})