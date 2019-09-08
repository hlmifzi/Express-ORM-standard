import Sequelize from "sequelize"

import conn from "../../config/datasource"


const Barang = conn.define('barang', {
    barang_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    artikel: { type: Sequelize.STRING(50), allowNull: false },
    nama_barang: { type: Sequelize.STRING(50), allowNull: false },
    size: { type: Sequelize.STRING(5), allowNull: false },
    warna: { type: Sequelize.STRING(50), allowNull: false },
    active: { type: Sequelize.INTEGER(1), defaultValue: 1 }
        
}, { timestamps: false, freezeTableName: true })

const BarangType = conn.define('barang_type', {
    barang_type_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    barang_id: { type: Sequelize.INTEGER, allowNull: false },
    type: { type: Sequelize.STRING(50), allowNull: false },
    harga: { type: Sequelize.FLOAT, allowNull: false },
    active: { type: Sequelize.INTEGER(1), defaultValue: 1 }

}, { timestamps: false, freezeTableName: true })

const Stok = conn.define('stok', {
    stok_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    barang_type_id: { type: Sequelize.INTEGER, allowNull: false },
    place_id: { type: Sequelize.INTEGER, allowNull: false },
    jumlah: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 0 },
    active: { type: Sequelize.INTEGER(1), defaultValue: 1 }

}, { timestamps: true, underscored: true, freezeTableName: true })


export { Barang, BarangType, Stok }