import { Sequelize } from 'sequelize'
import { config as c } from './config'
const env = process.env.NODE_ENV || 'development'
const config = c[env]


let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  )
}

import { User as userFn } from './models/user.model'
const User = userFn(sequelize, Sequelize)

export { User, sequelize, Sequelize }
