import Sequelize from "sequelize"
import conn from "../../config/datasource"


const User = conn.define('user', {
    user_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    place_id: { type: Sequelize.INTEGER, allowNull: false },
    role_id: { type: Sequelize.INTEGER, allowNull: false },
    fullname: { type: Sequelize.STRING(50), allowNull: false },
    username: { type: Sequelize.STRING(50), allowNull: false },
    hashpass: { type: Sequelize.TEXT, allowNull: false },
    active: { type: Sequelize.INTEGER(1), defaultValue: 1 },
    
}, { timestamps: false, freezeTableName: true})


export default User