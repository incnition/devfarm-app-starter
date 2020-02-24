'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        firstName: {
          allowNull: false,
          type: Sequelize.STRING
        },
        lastName: {
          allowNull: false,
          type: Sequelize.STRING
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING
        },
        encryptedPassword: {
          allowNull: false,
          type: Sequelize.STRING
        },
        admin: {
          type: Sequelize.BOOLEAN
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ['email']
          }
        ]
      }
    )
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
}
