import Sequelize from "sequelize"
import conn from "../../config/datasource"


const Place = conn.define('place', {
    place_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: Sequelize.STRING(50), allowNull: false },
    name: { type: Sequelize.STRING(50), allowNull: false },
    active: { type: Sequelize.INTEGER(1), defaultValue: 1 },
    
}, { timestamps: false, freezeTableName: true })


export default Place