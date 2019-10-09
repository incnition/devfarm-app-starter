require('dotenv').config()

const dbConnectionUri = `${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`
const migrationsDir = 'db/migrations'

module.exports = {
  dbConnectionUri,
  migrationsDir
}
