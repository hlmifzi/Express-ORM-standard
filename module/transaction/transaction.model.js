import Sequelize from "sequelize"
import conn from "../../config/datasource"

const PemasukanBarang = conn.define('pemasukan_barang', {
    pemasukan_barang_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    barang_type_id: { type: Sequelize.INTEGER, allowNull: false },
    place_from: { type: Sequelize.INTEGER, allowNull: false },
    place_to: { type: Sequelize.INTEGER, allowNull: false },
    jumlah: { type: Sequelize.INTEGER, allowNull: false },
    created_by: { type: Sequelize.INTEGER, allowNull: false },
}, { timestamps: true, underscored: true, freezeTableName: true })

const ReturBarang = conn.define('retur_barang', {
    retur_barang_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    barang_type_id: { type: Sequelize.INTEGER, allowNull: false },
    place_from: { type: Sequelize.INTEGER, allowNull: false },
    place_to: { type: Sequelize.INTEGER, allowNull: false },
    jumlah: { type: Sequelize.INTEGER, allowNull: false },
    created_by: { type: Sequelize.INTEGER, allowNull: false },
}, { timestamps: true, underscored: true, freezeTableName: true })

const PenjualanBarang = conn.define('penjualan_barang', {
    penjualan_barang_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    barang_type_id: { type: Sequelize.INTEGER, allowNull: false },
    place_from: { type: Sequelize.INTEGER, allowNull: false },
    jumlah: { type: Sequelize.INTEGER, allowNull: false },
    created_by: { type: Sequelize.INTEGER, allowNull: false },
}, { timestamps: true, underscored: true, freezeTableName: true })

const PenyusutanBarang = conn.define('penyusutan_barang', {
    penyusutan_barang_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    barang_type_id: { type: Sequelize.INTEGER, allowNull: false },
    place_from: { type: Sequelize.INTEGER, allowNull: false },
    jumlah: { type: Sequelize.INTEGER, allowNull: false },
    created_by: { type: Sequelize.INTEGER, allowNull: false },
}, { timestamps: true, underscored: true, freezeTableName: true })

export { PemasukanBarang, ReturBarang, PenjualanBarang, PenyusutanBarang } 