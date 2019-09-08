import { Place } from "../../model/index"
import ApiResponse from "../../utils/apiResponse"

const addPlace = async (req, res) => {
	try {
		let data = await Place.create(req.body)
		return ApiResponse.created(res, 'Add place success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const getAllPlace = async (req, res) => {
	try {
		let data = await Place.findAll({
			where: { active: 1 }
		})
		return ApiResponse.ok(res, 'Get all place success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const getPlaceByID = async (req, res) => {
	try {
		let data = await Place.findOne({
			where: { place_id: req.params.id, active: 1 }
		})
		return ApiResponse.ok(res, 'Get place by id success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const updatePlace = async (req, res) => {
	try {
		let data = await Place.update(req.body, { where : { place_id : req.body.place_id } })
		return ApiResponse.ok(res, 'Updated place success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const deletePlace = async (req, res) => {
	try {
		let data = await Place.update({ "active":0 }, { where : { place_id: req.body.place_id } })
		return ApiResponse.ok(res, 'Deleted place success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}


export { addPlace, getAllPlace, getPlaceByID, updatePlace, deletePlace }