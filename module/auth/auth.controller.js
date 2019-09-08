import bcrypt from "bcryptjs"
import Jwt from "jsonwebtoken"

import config from "../../config"
import { User, Place, Role } from "../../model/index"
import ApiResponse from "../../utils/apiResponse"

const login = async (req, res) => {
	try {
		let data = {}
		data["data"] = await User.findOne({
			include: [
				{ model: Place, attributes: ['place_id', 'name'] },
				{ model: Role, attributes: ['role_id', 'role'] }
			],
			where: { username: req.body.username, active: 1 },
			attributes: [['user_id', 'key'], 'username', 'fullname', 'hashpass']
		})
		let check = await bcrypt.compareSync(req.body.password, data.data.hashpass)
		if (!check) {
			return ApiResponse.forbidden(res, 'Authorization failed')
		} else {
			data["token"] = await Jwt.sign(config.payLoad, config.secretKey)
			return ApiResponse.ok(res, 'Login success', data)
		}
	} catch (err) {
		return ApiResponse.internalServerError(res, 'Internal server error', err)
	}
}

export { login }