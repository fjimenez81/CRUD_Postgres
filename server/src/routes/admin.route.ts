import { Router, Request, Response } from 'express'
import { getUsers, getUserById, createUser, deleteUser, updateUser } from '../Controllers/users.controller'

const router = Router()

router.get("/admin", (req: Request, res: Response) => {
    res.status(200).render('admin')
   
})

router.get("/", getUsers)
router.get("/:id", getUserById)
router.post("/", createUser)
router.delete("/:id", deleteUser)
router.put("/:id", updateUser)

export default router