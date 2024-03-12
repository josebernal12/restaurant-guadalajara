import { Sequelize } from 'sequelize'
import { env } from '../helpers/envalid'

const sequelize = new Sequelize(env.DB_DATABASE, env.DB_USER, env.DB_PASSWORD, {
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  host: env.DB_HOST
})

export default sequelize