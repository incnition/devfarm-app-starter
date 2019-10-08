const { Candidate } = require('../models')

/**
 * Make any changes you need to make to the database here
 */
async function up () {
  await Candidate.db.createCollection('candidates')
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down () {
  await Candidate.db.collection('candidates').drop()
}

module.exports = { up, down };
