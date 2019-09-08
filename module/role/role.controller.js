import { Role } from "../../model/index"
import ApiResponse from "../../utils/apiResponse"

const addRole = async (req, res) => {
	try {
		let data = await Role.create(req.body)
		return ApiResponse.created(res, 'Add role success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const getAllRole = async (req, res) => {
	try {
		let data = await Role.findAll({
			where: { active: 1 }
		})
		return ApiResponse.ok(res, 'Get all role success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const getRoleByID = async (req, res) => {
	try {
		let data = await Role.findOne({
			where: { role_id: req.params.id, active: 1 }
		})
		return ApiResponse.ok(res, 'Get role by id success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const updateRole = async (req, res) => {
	try {
		let data = await Role.update(req.body, { where : { role_id : req.body.role_id } })
		return ApiResponse.ok(res, 'Updated role success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const deleteRole = async (req, res) => {
	try {
		let data = await Role.update({ "active":0 }, { where : { role_id: req.body.role_id } })
		return ApiResponse.ok(res, 'Deleted role success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}


export { addRole, getAllRole, getRoleByID, updateRole, deleteRole }