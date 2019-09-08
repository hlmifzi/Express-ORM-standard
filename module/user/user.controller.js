import bcrypt from "bcryptjs"

import { User, Place, Role } from "../../model/index"
import ApiResponse from "../../utils/apiResponse"

const addUser = async (req, res) => {
	try {
		let hash = await bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
		req.body['hashpass'] = hash
		let data = await User.create(req.body)
		return ApiResponse.created(res, 'Add user success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const getAllUser = async (req, res) => {
	try {
		let data = await User.findAll({
			include: [
				{ model: Place, attributes: ['place_id', 'name'] },
				{ model: Role, attributes: ['role_id', 'role'] }
			],
			where: { active: 1 },
			attributes: [['user_id', 'key'], 'username', 'fullname', 'hashpass']
		})
		return ApiResponse.ok(res, 'Get all user success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const getUserByID = async (req, res) => {
	try {
		let data = await User.findOne({
			include: [
				{ model: Place },
				{ model: Role }
			],
			where: { user_id: req.params.id, active: 1 }
		})
		return ApiResponse.ok(res, 'Get user by id success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const updateUser = async (req, res) => {
	try {
		let data = await User.update(req.body, { where : { user_id : req.body.user_id } })
		return ApiResponse.ok(res, 'Updated user success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

const deleteUser = async (req, res) => {
	try {
		let data = await User.update({ "active":0 }, { where : { user_id: req.body.user_id } })
		return ApiResponse.ok(res, 'Deleted user success', data)
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}


export { addUser, getAllUser, getUserByID, updateUser, deleteUser }