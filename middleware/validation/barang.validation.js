import Joi from "joi"

export default {
    addBarang: {
        body: {
            artikel: Joi.required(),
            nama_barang: Joi.required(),
            size: Joi.required(),
            warna: Joi.required()
        }
    },
    getAllBarang: {
        // body: {
        //     place_id: Joi.number().required()
        // }
    },
    getSelectBarang: {
        // body: {
        //     place_id: Joi.number().required()
        // }
    },
    getBarangByID: {
        param: {
            id: Joi.number().required()
        }
    },
    updateBarang: {
        body: {
            barang_id: Joi.number().required()
        }
    },
    deleteBarang: {
        body: {
            barang_id: Joi.number().required()
        }
    }
}