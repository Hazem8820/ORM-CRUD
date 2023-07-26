import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';
import { userModel } from './user.model.js';


export const noteModel = sequelize.define('note', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
