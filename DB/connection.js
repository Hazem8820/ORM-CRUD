import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('thirdsql', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

export const connectDB = async () => {
    return await sequelize.sync().then(console.log('DB Connected !!')).catch(console.log('DB ERORR (Not Connected)'))
}