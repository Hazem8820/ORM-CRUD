import { connectDB } from '../DB/connection.js'
import userRouter from './modules/users/users.router.js'
import noteRouter from './modules/notes/notes.router.js'

export const bootstrap = (app, express) => {
    connectDB()
    app.use(express.json())
    app.use('/user', userRouter)
    app.use('/note', noteRouter)
}