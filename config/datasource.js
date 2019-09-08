import Sequelize from "sequelize"

const settings = {
	host: 'localhost',
	dialect: 'mysql', // mysql, postgree
	port: 3306, // 3306, 5344
	pool: {
		min: 0,
		max: 5,
		iddle: 10000
	},
	logging: false
}

const conn = new Sequelize('sipp', 'root', '', settings)

export default conn