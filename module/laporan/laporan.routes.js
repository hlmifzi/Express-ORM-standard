import express from "express"
import validate from "express-validation"


import { getAllPemasukan, getAllRetur, getAllPenjualan, getAllPenyusutan, excPemasukan, excRetur, excPenjualan, excPenyusutan } from "./laporan.controller"
// import laporanValidation from "../../middleware/validation/laporan.validation"


const router = express.Router()

router.get('/pemasukan', getAllPemasukan)
router.get('/retur', getAllRetur)
router.get('/penjualan', getAllPenjualan)
router.get('/penyusutan', getAllPenyusutan)

// router.get('/pemasukan/excel', validate(laporanValidation.getAllPemasukan), excPemasukan)
// router.get('/retur/excel', validate(laporanValidation.getAllRetur), excRetur)
// router.get('/penjualan/excel', validate(laporanValidation.getAllPenjualan), excPenjualan)
// router.get('/penyusutan/excel', validate(laporanValidation.getAllPenyusutan), excPenyusutan)

export default router