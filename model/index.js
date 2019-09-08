import User from "../module/user/user.model"
import Place from "../module/place/place.model"
import Role from "../module/role/role.model"
import { Barang, BarangType, Stok } from "../module/barang/barang.model"
import { PemasukanBarang, ReturBarang, PenjualanBarang, PenyusutanBarang } from "../module/transaction/transaction.model"

import conn from "../config/datasource"

conn.sync({
  // force: true
})

Place.hasMany(User, {foreignKey:'place_id'})  
User.belongsTo(Place, {foreignKey: 'place_id'})

Role.hasMany(User, {foreignKey:'role_id'})  
User.belongsTo(Role, {foreignKey: 'role_id'})

Place.hasMany(Stok, {foreignKey:'place_id'})
Stok.belongsTo(Place, {foreignKey: 'place_id'})

Barang.hasMany(BarangType, {foreignKey:'barang_id'})
BarangType.belongsTo(Barang, {foreignKey: 'barang_id'})

BarangType.hasMany(Stok, {foreignKey:'barang_type_id'})
Stok.belongsTo(BarangType, {foreignKey: 'barang_type_id'})

BarangType.hasMany(PemasukanBarang, {foreignKey:'barang_type_id'})
PemasukanBarang.belongsTo(BarangType, {foreignKey: 'barang_type_id'})
BarangType.hasMany(ReturBarang, {foreignKey:'barang_type_id'})
ReturBarang.belongsTo(BarangType, {foreignKey: 'barang_type_id'})
BarangType.hasMany(PenjualanBarang, {foreignKey:'barang_type_id'})
PenjualanBarang.belongsTo(BarangType, {foreignKey: 'barang_type_id'})
BarangType.hasMany(PenyusutanBarang, {foreignKey:'barang_type_id'})
PenyusutanBarang.belongsTo(BarangType, {foreignKey: 'barang_type_id'})

Place.hasMany(PemasukanBarang, {foreignKey:'place_from'})
PemasukanBarang.belongsTo(Place, {as: 'place_froms', foreignKey:'place_from'})
Place.hasMany(ReturBarang, {foreignKey:'place_from'})
ReturBarang.belongsTo(Place, {as: 'place_froms', foreignKey:'place_from'})
Place.hasMany(PenjualanBarang, {foreignKey:'place_from'})
PenjualanBarang.belongsTo(Place, {as: 'place_froms', foreignKey:'place_from'})
Place.hasMany(PenyusutanBarang, {foreignKey:'place_from'})
PenyusutanBarang.belongsTo(Place, {as: 'place_froms', foreignKey:'place_from'})

Place.hasMany(PemasukanBarang, {foreignKey:'place_to'})
PemasukanBarang.belongsTo(Place, {as: 'place_tos', foreignKey:'place_to'})
Place.hasMany(ReturBarang, {foreignKey:'place_to'})
ReturBarang.belongsTo(Place, {as: 'place_tos', foreignKey:'place_to'})

User.hasMany(PemasukanBarang, {foreignKey:'created_by'})
PemasukanBarang.belongsTo(User, {foreignKey:'created_by'})
User.hasMany(ReturBarang, {foreignKey:'created_by'})
ReturBarang.belongsTo(User, {foreignKey:'created_by'})
User.hasMany(PenjualanBarang, {foreignKey:'created_by'})
PenjualanBarang.belongsTo(User, {foreignKey:'created_by'})
User.hasMany(PenyusutanBarang, {foreignKey:'created_by'})
PenyusutanBarang.belongsTo(User, {foreignKey:'created_by'})

export { User, Place, Role, Barang, BarangType, Stok, PemasukanBarang, ReturBarang, PenjualanBarang, PenyusutanBarang }
