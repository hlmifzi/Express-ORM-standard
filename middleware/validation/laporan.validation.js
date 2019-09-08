import Joi from "joi"

export default {
    getAllPemasukan: {
        query: {
            date_from: Joi.date(),
            date_to: Joi.date()
        }
    },
    getAllRetur: {
        query: {
            date_from: Joi.date(),
            date_to: Joi.date()
        }
    },
    getAllPenjualan: {
        query: {
            date_from: Joi.date(),
            date_to: Joi.date()
        }
    },
    getAllPenyusutan: {
        query: {
            date_from: Joi.date(),
            date_to: Joi.date()
        }
    },
}