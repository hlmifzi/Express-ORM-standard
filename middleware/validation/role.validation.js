import Joi from "joi"

export default {
    addRole: {
        body: {
            role: Joi.number().required(),
            menu: Joi.string().required()
        }
    },
    getRoleByID: {
        param: {
            id: Joi.number().required()
        }
    },
    updateRole: {
        body: {
            role_id: Joi.number().required()
        }
    },
    deleteRole: {
        body: {
            role_id: Joi.number().required()
        }
    }
}