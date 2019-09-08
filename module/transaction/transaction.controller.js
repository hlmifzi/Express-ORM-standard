import {
	PemasukanBarang,
	ReturBarang,
	PenjualanBarang,
	PenyusutanBarang,
	Barang,
	BarangType,
	Stok
} from "../../model/index"
import ApiResponse from "../../utils/apiResponse"

const addPemasukanBarang = async (req, res) => {
	try {

		// create pemasukan
		let data = await PemasukanBarang.create(req.body)

		// cek stok and get id
		let stok = await Stok.findOne({
			where: { barang_type_id: req.body.barang_type_id, place_id: req.body.place_to, active: 1 },
			attributes: ['stok_id', 'jumlah']
		})

		let stokBefore = 0
		let stokAfter

		// insert stok or update
		if (!stok) {
			stokAfter = stokBefore + req.body.jumlah
			let insertStok = {
				place_id: req.body.place_to,
				barang_type_id: req.body.barang_type_id,
				jumlah: stokAfter
			}
			console.log(insertStok)
			let createStok = await Stok.create(insertStok)
		} else {
			stokBefore = stok.jumlah
			stokAfter = stokBefore + req.body.jumlah
			let updateStok = await Stok.update({ jumlah: stokAfter }, { where: { stok_id: stok.stok_id } })
		}

		// response
		let response = {
			transaction: req.body,
			stokBefore: stokBefore,
			stokAfter: stokAfter
		}
		return ApiResponse.ok(res, 'Add pemasukan barang success', response)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const addReturBarang = async (req, res) => {
	try {
		// cek stok and get id
		let stok = await Stok.findOne({
			where: { barang_type_id: req.body.barang_type_id, place_id: req.body.place_from, active: 1 },
			attributes: ['stok_id', 'jumlah']
		})

		let stokBefore = stok.jumlah
		let stokAfter = stokBefore - req.body.jumlah

		// validate stok
		if (stokBefore < stokAfter) {
			return ApiResponse.badRequest(res, 'Add retur barang gagal, jumlah transaksi melebihi stok')
		}

		// create retur
		let data = await ReturBarang.create(req.body)

		// insert stok or update
		let updateStok = await Stok.update({ jumlah: stokAfter }, { where: { stok_id: stok.stok_id } })

		// response
		let response = {
			transaction: req.body,
			stokBefore: stokBefore,
			stokAfter: stokAfter
		}
		return ApiResponse.ok(res, 'Add retur barang success', response)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const addPenjualanBarang = async (req, res) => {
	try {
		// cek stok and get id
		let stok = await Stok.findOne({
			where: { barang_type_id: req.body.barang_type_id, place_id: req.body.place_from, active: 1 },
			attributes: ['stok_id', 'jumlah']
		})

		let stokBefore = stok.jumlah
		let stokAfter = stokBefore - req.body.jumlah

		// validate stok
		if (stokBefore < stokAfter) {
			return ApiResponse.badRequest(res, 'Add penjualan barang gagal, jumlah transaksi melebihi stok')
		}

		// create penjualan
		let data = await PenjualanBarang.create(req.body)

		// insert stok or update
		let updateStok = await Stok.update({ jumlah: stokAfter }, { where: { stok_id: stok.stok_id } })

		// response
		let response = {
			transaction: req.body,
			stokBefore: stokBefore,
			stokAfter: stokAfter
		}
		return ApiResponse.ok(res, 'Add penjualan barang success', response)
	} catch (err) {
		console.log(err)
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const addPenyusutanBarang = async (req, res) => {
	try {
		// cek stok normal
		let stokNorm = await Stok.findOne({
			include: {
				model: BarangType,
				where: { active: 1 },
				attributes: ['barang_id']
			},
			where: { barang_type_id: req.body.barang_type_id, place_id: req.body.place_from, active: 1 },
			attributes: ['stok_id', 'jumlah']
		})

		// validation
		if (!stokNorm) {
			return ApiResponse.badRequest(res, 'Add penyusutan barang gagal, stok tidak ditemukan')
		}

		// cek stok ob
		let barangTypeOB = await BarangType.findOne({
			where: { barang_id: stokNorm.barang_type.barang_id, type: "OB", active: 1 },
			attributes: ['barang_type_id']
		})
		let stokOB = await Stok.findOne({
			where: { barang_type_id: barangTypeOB.barang_type_id, place_id: req.body.place_from, active: 1 },
			attributes: ['stok_id', 'jumlah']
		})

		// validation
		if(stokOB && (stokNorm.jumlah < req.body.jumlah)) {
			return ApiResponse.badRequest(res, 'Add penyusutan barang gagal, jumlah transaksi melebihi stok')
		}

		// create penyusutan
		let data = await PenyusutanBarang.create(req.body)

		// calculation
		let stokNormAf = stokNorm.jumlah - req.body.jumlah
		let updateStokNorm = await Stok.update({ jumlah: stokNormAf }, { where: { stok_id: stokNorm.stok_id } })
		
		let stokOBAf = (stokOB) ? stokOB.jumlah + req.body.jumlah : req.body.jumlah 
		if (stokOB) {
			let updateStokOB = await Stok.update({ jumlah: stokOBAf }, { where: { stok_id: stokOB.stok_id } })
		} else {
			let insertStokOB = {
				place_id: req.body.place_from,
				barang_type_id: barangTypeOB.barang_type_id,
				jumlah: req.body.jumlah
			}			
			let createStokOB = await Stok.create(insertStokOB)
		}

		// response
		let response = {
			transaction: req.body,
			stokNormal: stokNormAf,
			stokOb: stokOBAf
		}

		return ApiResponse.ok(res, 'Add penyusutan barang success')
	} catch (err) {
		console.log(err)
		return ApiResponse.internalServerError(res, 'Internal server error', {})
	}
}

export { addPemasukanBarang, addReturBarang, addPenjualanBarang, addPenyusutanBarang }