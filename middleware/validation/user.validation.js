import Joi from "joi"

export default {
    addUser: {
        body: {
            place_id: Joi.number().required(),
            role_id: Joi.number().required(),
            fullname: Joi.required(),
            username: Joi.required(),
            password: Joi.required()
        }
    },
    getUserByID: {
        param: {
            id: Joi.number().required()
        }
    },
    updateUser: {
        body: {
            user_id: Joi.number().required()
        }
    },
    deleteUser: {
        body: {
            user_id: Joi.number().required()
        }
    }
}