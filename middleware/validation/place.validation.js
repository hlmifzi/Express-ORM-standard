import Joi from "joi"

export default {
    addPlace: {
        body: {
            code: Joi.required(),
            name: Joi.required(),
        }
    },
    getPlaceByID: {
        param: {
            id: Joi.number().required()
        }
    },
    updatePlace: {
        body: {
            place_id: Joi.number().required()
        }
    },
    deletePlace: {
        body: {
            place_id: Joi.number().required()
        }
    }
}