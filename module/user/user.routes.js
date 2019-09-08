import express from "express"
import validate from "express-validation"


import { addUser, getAllUser, getUserByID, updateUser, deleteUser } from "./user.controller"
import userValidation from "../../middleware/validation/user.validation"


const router = express.Router()

router.get('/', getAllUser)
router.post('/', validate(userValidation.addUser), addUser)
router.get('/:id', validate(userValidation.getUserByID), getUserByID)
router.put('/', validate(userValidation.updateUser), updateUser)
router.delete('/', validate(userValidation.deleteUser), deleteUser)


export default router