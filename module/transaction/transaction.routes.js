import express from "express"
import validate from "express-validation"

import { addPemasukanBarang, addReturBarang, addPenjualanBarang, addPenyusutanBarang } from "./transaction.controller"
import transactionValidation from "../../middleware/validation/transaction.validation"

const router = express.Router()

router.post('/pemasukan', validate(transactionValidation.addPemasukanBarang), addPemasukanBarang)
router.post('/retur', validate(transactionValidation.addReturBarang), addReturBarang)
router.post('/penjualan', validate(transactionValidation.addPenjualanBarang), addPenjualanBarang)
router.post('/penyusutan', validate(transactionValidation.addPenyusutanBarang), addPenyusutanBarang)

export default router