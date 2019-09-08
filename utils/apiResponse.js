const ApiResponse = {
	build: (res, status, code, message, data) => {
		return build(res, status, code, message, data)
	},
	ok: (res, message = 'Ok', data = {}) => {
		return build(res, 200, message, data)
	},
	created: (res, message = 'Data created', data = {}) => {
		return build(res, 201, message, data)
	},
	accepted: (res, message = 'Accepted', data = {}) => {
		return build(res, 202, message, data)
	},
	noContent: (res, message = 'No content', data = {}) => {
		return build(res, 204, message, data)
	},
	badRequest: (res, message = 'Bad request', data = {}) => {
		return error(res, 400, message, data)
	},
	forbidden: (res, message = 'Forbidden', data = {}) => {
		return error(res, 403, message, data)
	},
	notAcceptable: (res, message = 'Not Acceptable', data = {}) => {
		return error(res, 406, message, data)
	},
	conflict: (res, message = 'Conflict', data = {}) => {
		return error(res, 409, message, data)
	},
	unAuthorized: (res, message = 'Unauthorized', data = {}) => {
		return error(res, 401, message, data)
	},
	notFound: (res, message = 'Data not found', data = {}) => {
		return error(res, 404, message, data)
	},
	unProcessableEntity: (res, message = 'Unprocessable Entity', data = {}) => {
		return error(res, 422, message, data)
	},
	internalServerError: (res, message = 'Internal Server Error', data = {}) => {
		return error(res, 500, message, data)
	},
	serviceUnAvailable: (res, message = 'Service Unavailable', data = {}) => {
		return error(res, 503, message, data)
	},
	notImplemented: (res, message = 'Not Implemented', data = {}) => {
		return error(res, 501, message, data)
	},
	badGateway: (res, message = 'Bad Gateway', data = {}) => {
		return error(res, 502, message, data)
	},
	unknownError: (res, message = 'Unknown Error', data = {}) => {
		return error(res, 505, message, data)
	}
}

const build = (res, code, message, data) => {
	const response = {
		meta: {
			success: true,
			status: code,
			timestamp: new Date().getTime(),
			message: message
		},
		count: data.length,
		data: data
	}
	return res.status(code).json(response)
}

const error = (res, code, message, data) => {
	// data = (!data.errors) ? data.errors : { name: data.name, message: data.message }
	const response = {
		meta: {
			success: false,
			status: code,
			timestamp: new Date().getTime(),
			message: message
		},
		count: data.length,
		error: data
	}
	return res.status(code).json(response)
}

export default ApiResponse