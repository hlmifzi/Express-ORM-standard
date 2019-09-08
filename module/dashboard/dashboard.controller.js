import sequelize from "../../config/datasource"

import { User, Place, Barang, BarangType, Stok, PenjualanBarang } from "../../model/index"
import ApiResponse from "../../utils/apiResponse"


const DBDataMaster = async (req, res) => {
    try {
        let user = await User.findAndCountAll({
            where: { active: 1 }
        })
        let place = await Place.findAndCountAll({
            where: { active: 1 }
        })
        
        let data = { user: user.count, place: place.count }

        return ApiResponse.ok(res, 'Get data success', data)
    } catch (err) {
        return ApiResponse.internalServerError(res, 'Internal server error', err)
    }
}

const DBBarang = async (req, res) => {
    try {
        let barang = await Barang.findAndCountAll({
            where: { active: 1 }
        })
        let stok_br = await Stok.sum('jumlah', {
            include:[
                { 
                    model: BarangType,
                    where: { type: "NORMAL", active: 1 }
                },
            ],
            where: { active: 1 }
        })
        let stok_nom = await Stok.sum('jumlah', {
            include:[
                { 
                    model: BarangType,
                    where: { type: "NORMAL", active: 1 }
                },
            ],
            where: { active: 1 }
        })
        let stok_ob = await Stok.sum('jumlah', {
            include:[
                { 
                    model: BarangType,
                    where: { type: "OB", active: 1 }
                },
            ],
            where: { active: 1 }
        })
        console.log(stok_br)
        let data = { barang: barang.count, stok_br: stok_br ? stok_br : 0, stok_br_normal: stok_nom ? stok_nom : 0, stok_br_ob: stok_ob ? stok_ob : 0 }
        console.log(data)

        return ApiResponse.ok(res, 'Get data success', data)
    } catch (err) {
        return ApiResponse.internalServerError(res, 'Internal server error', err)
    }
}

const DBPenjualan = async (req, res) => {
    try {
        let pcday = await PenjualanBarang.sum('jumlah', {
            where: { 
                active: 1 ,
                created_at: 
                    sequelize.where(
                        sequelize.fn('DATE', sequelize.col('created_at')),
                        sequelize.literal('CURRENT_DATE')
                    )
            }
        })
        let pyday = await PenjualanBarang.sum('jumlah', {
            where: { 
                active: 1 ,
                created_at: 
                    sequelize.where(
                        sequelize.fn('DATE', sequelize.col('created_at')),
                        sequelize.literal('SUBDATE(CURRENT_DATE(),1)')
                    )
            }
        })
        let pcmonth = await PenjualanBarang.sum('jumlah', {
            where: { 
                active: 1 ,
                created_at: 
                    sequelize.where(
                        sequelize.fn('MONTH', sequelize.col('created_at')),
                        sequelize.literal('MONTH(CURRENT_DATE)')
                    )
            }
        })
        let pcyear = await PenjualanBarang.sum('jumlah', {
            where: { 
                active: 1 ,
                created_at: 
                    sequelize.where(
                        sequelize.fn('YEAR', sequelize.col('created_at')),
                        sequelize.literal('YEAR(CURRENT_DATE)')
                    )
            }
        })
        let pemonth = []
        for (let i = 1; i <= 12; i++) {
            let datam = await PenjualanBarang.sum('jumlah', {
                where: { 
                    active: 1 ,
                    created_at: 
                    sequelize.where(
                        sequelize.fn('MONTH', sequelize.col('created_at')),
                        sequelize.literal(i)
                    )
                }
            })
            pemonth.push(datam ? datam : 0)
        }
        
        let data = { penj_cday: pcday ? pcday : 0, penj_yday: pyday ? pyday : 0, penj_cmonth: pcmonth ? pcmonth : 0, penj_cyear: pcyear ? pcyear : 0, penj_emonth: pemonth }

        return ApiResponse.ok(res, 'Get data success', data)
    } catch (err) {
        return ApiResponse.internalServerError(res, 'Internal server error', err)
    }
}

export { DBDataMaster, DBBarang, DBPenjualan }