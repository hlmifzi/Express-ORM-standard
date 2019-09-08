import Sequelize from "sequelize"
import conn from "../../config/datasource"


const Role = conn.define('role', {
    role_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    role: { type: Sequelize.STRING(50), allowNull: false },
    menu: { type: Sequelize.STRING, allowNull: false },
    active: { type: Sequelize.INTEGER(1), defaultValue: 1 },
    
}, { timestamps: false, freezeTableName: true })


export default Role