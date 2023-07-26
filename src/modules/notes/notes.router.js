import { Router } from "express"
import * as notesLogic from './controller/notes.js'
const router = Router()

router.get('/', notesLogic.getNotes)
router.post('/add', notesLogic.addNotes)
router.delete('/delete/:id', notesLogic.deleteNote)
router.put('/update/:id', notesLogic.updateNote)
router.get('/getboth', notesLogic.getBoth)

export default router