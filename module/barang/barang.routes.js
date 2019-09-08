import express from "express"
import validate from "express-validation"


import { addBarang, getAllBarang, getBarangByID, updateBarang, deleteBarang, getSelectBarang } from "./barang.controller"
import barangValidation from "../../middleware/validation/barang.validation"

const router = express.Router()

router.get('/', validate(barangValidation.getAllBarang), getAllBarang)
router.get('/lselect', validate(barangValidation.getSelectBarang), getSelectBarang)
router.get('/:id', validate(barangValidation.getBarangByID), getBarangByID)
router.post('/', validate(barangValidation.addBarang), addBarang)
router.put('/', validate(barangValidation.updateBarang), updateBarang)
router.delete('/', validate(barangValidation.deleteBarang), deleteBarang)



export default router