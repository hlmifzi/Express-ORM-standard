import express from "express"
import validate from "express-validation"


import { addRole, getAllRole, getRoleByID, updateRole, deleteRole } from "./role.controller"
import roleValidation from "../../middleware/validation/role.validation"


const router = express.Router()

router.get('/', getAllRole)
router.post('/', validate(roleValidation.addRole), addRole)
router.get('/:id', validate(roleValidation.getRoleByID), getRoleByID)
router.put('/', validate(roleValidation.updateRole), updateRole)
router.delete('/', validate(roleValidation.deleteRole), deleteRole)


export default router