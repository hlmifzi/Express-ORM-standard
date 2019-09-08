import sequelize from "../../config/datasource"

import { Barang, BarangType, Stok, Place } from "../../model/index"
import ApiResponse from "../../utils/apiResponse"

const addBarang = async (req, res) => {
	try {
		let data = req.body
		let dataBarang = await Barang.create(data)
		var dataBarangType = await BarangType.create({ barang_id: dataBarang.barang_id, type: "NORMAL", harga: req.body.harga_normal })
		// var dataStok = await Stok.create({ barang_type_id: dataBarangType.barang_type_id })
		var dataBarangType = await BarangType.create({ barang_id: dataBarang.barang_id, type: "OB", harga: req.body.harga_ob })
		// var dataStok = await Stok.create({ barang_type_id: dataBarangType.barang_type_id })

		return ApiResponse.created(res, 'Add barang success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const getAllBarang = async (req, res) => {
	try {
		let data = await sequelize.query(
			'SELECT br.barang_id as `key`, br.artikel as `artikel`, br.nama_barang as `product_name`, br.size as `size`, br.warna as `warna`, IFNULL((SELECT bt1.harga FROM barang_type bt1 WHERE bt1.barang_id=br.barang_id AND bt1.`type`="NORMAL" ORDER BY bt1.barang_type_id DESC LIMIT 1), 0) as normal_price, IFNULL((SELECT bt2.harga FROM barang_type bt2 WHERE bt2.barang_id=br.barang_id AND bt2.`type`="OB" ORDER BY bt2.barang_type_id DESC LIMIT 1), 0) as ob_price, IFNULL((SELECT st1.jumlah FROM barang_type bt1, stok st1 WHERE bt1.barang_id=br.barang_id AND bt1.`type`="NORMAL" AND bt1.barang_type_id=st1.barang_type_id ORDER BY bt1.barang_type_id DESC LIMIT 1), 0) as normal_stok, IFNULL((SELECT st2.jumlah FROM barang_type bt2, stok st2 WHERE bt2.barang_id=br.barang_id AND bt2.`type`="OB" AND bt2.barang_type_id=st2.barang_type_id ORDER BY bt2.barang_type_id DESC LIMIT 1), 0) as ob_stok, IFNULL((SELECT p.name FROM barang_type bt1, stok st1, place p WHERE bt1.barang_id=br.barang_id AND bt1.barang_type_id=st1.barang_type_id AND st1.place_id=p.place_id ORDER BY bt1.barang_type_id DESC LIMIT 1), "-") as tenant FROM barang br WHERE br.active=1',
			{
				model: Barang,
				raw: true
			})
		return ApiResponse.ok(res, 'Get all barang success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const getSelectBarang = async (req, res) => {
	try {
		let data = await sequelize.query(
			'SELECT bt.barang_type_id, bt.type, br.barang_id, br.artikel, br.nama_barang, br.warna, br.size FROM barang_type bt, barang br WHERE bt.barang_id=br.barang_id and bt.active=1 and br.active=1',
			{
				model: BarangType,
				raw: true
			})
		return ApiResponse.ok(res, 'Get select barang success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const getBarangByID = async (req, res) => {
	try {
		let data = await sequelize.query(
			'SELECT br.barang_id as `key`, br.artikel as `artikel`, br.nama_barang as `product_name`, br.size as `size`, br.warna as `warna`, IFNULL((SELECT bt1.harga FROM barang_type bt1 WHERE bt1.barang_id=br.barang_id AND bt1.`type`="NORMAL" ORDER BY bt1.barang_type_id DESC LIMIT 1), 0) as normal_price, IFNULL((SELECT bt2.harga FROM barang_type bt2 WHERE bt2.barang_id=br.barang_id AND bt2.`type`="OB" ORDER BY bt2.barang_type_id DESC LIMIT 1), 0) as ob_price, IFNULL((SELECT st1.jumlah FROM barang_type bt1, stok st1 WHERE bt1.barang_id=br.barang_id AND bt1.`type`="NORMAL" AND bt1.barang_type_id=st1.barang_type_id ORDER BY bt1.barang_type_id DESC LIMIT 1), 0) as normal_stok, IFNULL((SELECT st2.jumlah FROM barang_type bt2, stok st2 WHERE bt2.barang_id=br.barang_id AND bt2.`type`="OB" AND bt2.barang_type_id=st2.barang_type_id ORDER BY bt2.barang_type_id DESC LIMIT 1), 0) as ob_stok, IFNULL((SELECT p.name FROM barang_type bt1, stok st1, place p WHERE bt1.barang_id=br.barang_id AND bt1.barang_type_id=st1.barang_type_id AND st1.place_id=p.place_id ORDER BY bt1.barang_type_id DESC LIMIT 1), "-") as tenant FROM barang br WHERE br.active=1 AND br.barang_id=:barang_id',
			{
				replacements: { barang_id: req.params.id },
				model: Barang,
				raw: true
			})
		return ApiResponse.ok(res, 'Get all barang success', data[0])
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const updateBarang = async (req, res) => {
	try {
		let data = req.body
		let dataBarang = await Barang.update({ artikel: data.artikel, nama_barang: data.nama_barang, size: data.size, warna: data.warna }, { where: { barang_id: data.barang_id } })

		let nbarang_type_id = await BarangType.findOne({
			where: { barang_id: data.barang_id, type: "NORMAL" },
			attributes: ['barang_type_id']
		})
		let nBarangType = await BarangType.update({ harga: data.harga_normal }, { where: { barang_type_id: nbarang_type_id.barang_type_id } })


		let obarang_type_id = await BarangType.findOne({
			where: { barang_id: data.barang_id, type: "OB" },
			attributes: ['barang_type_id']
		})
		let oBarangType = await BarangType.update({ harga: data.harga_ob }, { where: { barang_type_id: obarang_type_id.barang_type_id } })

		return ApiResponse.ok(res, 'Updated barang success', dataBarang)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const deleteBarang = async (req, res) => {
	try {
		let data = Barang.update({ "active": 0 }, { where: { barang_id: req.body.barang_id } })
		return ApiResponse.ok(res, 'Deleted barang success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

export { addBarang, getAllBarang, getBarangByID, updateBarang, deleteBarang, getSelectBarang }