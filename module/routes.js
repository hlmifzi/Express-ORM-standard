import express from "express"

import authRoutes from "./auth/auth.routes"
import userRoutes from "./user/user.routes"
import placeRoutes from "./place/place.routes"
import roleRoutes from "./role/role.routes"
import barangRoutes from "./barang/barang.routes"
import transactionRoutes from "./transaction/transaction.routes"
import laporanRoutes from "./laporan/laporan.routes"
import dashboardRoutes from "./dashboard/dashboard.routes"

import authJwt from "../middleware/auth.jwt"

const router = express.Router()

router.use('/auth', authRoutes)
// router.use(authJwt)
router.use('/user', userRoutes)
router.use('/place', placeRoutes)
router.use('/role', roleRoutes)
router.use('/barang', barangRoutes)
router.use('/transaction', transactionRoutes)
router.use('/laporan', laporanRoutes)
router.use('/dashboard', dashboardRoutes)

export default router