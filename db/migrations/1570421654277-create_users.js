const { User } = require('../models')

/**
 * Make any changes you need to make to the database here
 */
async function up() {
  await User.db.createCollection('users')
  await User.collection.createIndex({ email: 1 }, { unique: true })
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down() {
  await User.db.collection('users').drop()
}

module.exports = { up, down }
