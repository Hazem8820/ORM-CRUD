import { Router } from "express";
import * as userLogic from "./controller/users.js";
const router = Router()

router.get('/', userLogic.getUsers)
router.post('/signup', userLogic.signup)
router.post('/signin', userLogic.signin)
router.put('/update/:id', userLogic.updateUser)
router.delete('/delete/:id', userLogic.deleteUser)
router.get('/search/:char/:age', userLogic.searchByChar)
router.get('/searchage/:age1/:age2', userLogic.searchByAge)
router.get('/oldestUsers', userLogic.oldestUsers)
router.get('/searchid/:id', userLogic.searchByid)

export default router