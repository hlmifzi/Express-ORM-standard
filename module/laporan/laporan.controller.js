import sequelize from "../../config/datasource"

import { PemasukanBarang, ReturBarang, PenjualanBarang, PenyusutanBarang, Place, BarangType } from "../../model/index"
import ApiResponse from "../../utils/apiResponse"

const dateToString = (time) => {
	let datetime = new Date(time)
	return datetime.toISOString().split('T')[0];
}

const getAllPemasukan = async (req, res) => {
	try {
		// defining condition
		let condition = ""
		if (req.query.date_from) { condition += " and mn.created_at >= \"" + dateToString(req.query.date_from) + "\"" }
		if (req.query.date_to) { condition += " and mn.created_at <= \"" + dateToString(req.query.date_to) + "\"" }

		let data = await sequelize.query(
			'SELECT mn.pemasukan_barang_id as `key`, mn.jumlah, br.nama_barang, br.artikel, bt.`type`, plf.name as place_from, plt.name as place_to FROM pemasukan_barang mn, barang_type bt, barang br, place plf, place plt where mn.barang_type_id=bt.barang_type_id and bt.barang_id=br.barang_id and mn.place_from=plf.place_id and mn.place_to=plt.place_id and mn.active = 1 '+condition,
			{
			  	model: PemasukanBarang,
				raw: true
			})
		return ApiResponse.ok(res, 'Get all pemasukan success', data)
	} catch (err) {
		console.log(err)
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const getAllRetur = async (req, res) => {
	try {
		// defining condition
		let condition = ""
		if (req.query.date_from) { condition += " and mn.created_at >= \"" + dateToString(req.query.date_from) + "\"" }
		if (req.query.date_to) { condition += " and mn.created_at <= \"" + dateToString(req.query.date_to) + "\"" }

		let data = await sequelize.query(
			'SELECT mn.retur_barang_id as `key`, mn.jumlah, br.nama_barang, br.artikel, bt.`type`, plf.name as place_from, plt.name as place_to FROM retur_barang mn, barang_type bt, barang br, place plf, place plt where mn.barang_type_id=bt.barang_type_id and bt.barang_id=br.barang_id and mn.place_from=plf.place_id and mn.place_to=plt.place_id and mn.active = 1 '+condition,
			{
			  	model: ReturBarang,
				raw: true
			})
		return ApiResponse.ok(res, 'Get all retur success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const getAllPenjualan = async (req, res) => {
	try {
		// defining condition
		let condition = ""
		if (req.query.date_from) { condition += " and mn.created_at >= \"" + dateToString(req.query.date_from) + "\"" }
		if (req.query.date_to) { condition += " and mn.created_at <= \"" + dateToString(req.query.date_to) + "\"" }

		let data = await sequelize.query(
			'SELECT mn.penjualan_barang_id as `key`, mn.jumlah, br.nama_barang, br.artikel, bt.`type`, plf.name as place_from FROM penjualan_barang mn, barang_type bt, barang br, place plf where mn.barang_type_id=bt.barang_type_id and bt.barang_id=br.barang_id and mn.place_from=plf.place_id and mn.active = 1 '+condition,
			{
			  	model: PenjualanBarang,
				raw: true
			})
		return ApiResponse.ok(res, 'Get all penjualan success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const getAllPenyusutan = async (req, res) => {
	try {
		// defining condition
		let condition = ""
		if (req.query.date_from) { condition += " and mn.created_at >= \"" + dateToString(req.query.date_from) + "\"" }
		if (req.query.date_to) { condition += " and mn.created_at <= \"" + dateToString(req.query.date_to) + "\"" }

		let data = await sequelize.query(
			'SELECT mn.penyusutan_barang_id as `key`, mn.jumlah, br.nama_barang, br.artikel, bt.`type`, plf.name as place_from FROM penyusutan_barang mn, barang_type bt, barang br, place plf where mn.barang_type_id=bt.barang_type_id and bt.barang_id=br.barang_id and mn.place_from=plf.place_id and mn.active = 1 '+condition,
			{
			  	model: PenyusutanBarang,
				raw: true
			})
		return ApiResponse.ok(res, 'Get all penyusutan success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const excPemasukan = async (req, res) => {
	try {
		let data = await PemasukanBarang.findAll()
		return ApiResponse.ok(res, 'Get all  success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}
const excRetur = async (req, res) => {
	try {
		let data = await ReturBarang.findAll()
		return ApiResponse.ok(res, 'Get all  success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}
const excPenjualan = async (req, res) => {
	try {
		let data = await PenjualanBarang.findAll()
		return ApiResponse.ok(res, 'Get all  success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}
const excPenyusutan = async (req, res) => {
	try {
		let data = await PenyusutanBarang.findAll()
		return ApiResponse.ok(res, 'Get all  success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

export { getAllPemasukan, getAllRetur, getAllPenjualan, getAllPenyusutan, excPemasukan, excRetur, excPenjualan, excPenyusutan }