import Joi from "joi"

export default {
    addPemasukanBarang: {
        body: {
            barang_type_id: Joi.number().required(),
            place_from: Joi.number().required(),
            place_to: Joi.number().required(),
            jumlah: Joi.number().required(),
            created_by: Joi.number().required()
        }
    },
    addReturBarang: {
        body: {
            barang_type_id: Joi.number().required(),
            place_from: Joi.number().required(),
            place_to: Joi.number().required(),
            jumlah: Joi.number().required(),
            created_by: Joi.number().required()
        }
    },
    addPenjualanBarang: {
        body: {
            barang_type_id: Joi.number().required(),
            place_from: Joi.number().required(),
            jumlah: Joi.number().required(),
            created_by: Joi.number().required()
        }
    },
    addPenyusutanBarang: {
        body: {
            barang_type_id: Joi.number().required(),
            place_from: Joi.number().required(),
            jumlah: Joi.number().required(),
            created_by: Joi.number().required()
        }
    }
}