import express from "express"
import validate from "express-validation"


import { DBDataMaster, DBBarang, DBPenjualan } from "./dashboard.controller"


const router = express.Router()



router.get('/data_master', DBDataMaster)
router.get('/barang', DBBarang)
router.get('/penjualan', DBPenjualan)





export default router