'use strict'

import bcrypt from 'bcrypt'
import { encryptedPassword } from '../../utils'

const User = (sequelize, Sequelize) => {
  const UserModel = sequelize.define(
    'User',
    {
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true,
          isUnique: function(email) {
            const currentUser = this
            const newRecord = currentUser.id === null
            return UserModel.findOne({ where: { email } }).then(previous => {
              // If someone already has this email address and this is a new user being created, OR
              // someone already has this email address and we are are trying to update a different
              // user with the same email address ... then blow up.
              if (previous && (newRecord || currentUser.id !== previous.id)) {
                throw new Error(`Email ${email} has already been taken`)
              }
            })
          }
        }
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      password: {
        type: Sequelize.VIRTUAL,
        set: function({ password, passwordConfirmation }) {
          if (password && passwordConfirmation) {
            this.setDataValue('password', { password, passwordConfirmation })
            const encrypted = encryptedPassword(password)
            this.setDataValue('encryptedPassword', encrypted)
          }
        },
        validate: {
          isValid: ({ password }) => {
            const regex = new RegExp(
              '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*'
            )
            if (!regex.test(password))
              throw new Error(
                'Password must contain at least one number, one uppercase letter, one lowercase letter, and at least 8 characters'
              )
          },
          mustMatch: function({ password, passwordConfirmation }) {
            if (password !== passwordConfirmation) {
              throw new Error('Passwords do not match')
            }
          }
        }
      },
      encryptedPassword: {
        type: Sequelize.BOOLEAN,
        get: function() {
          throw new Error("Can't get the encrypted password!")
        }
      }
    },
    { tableName: 'users' }
  )
  UserModel.prototype.authenticate = function(password) {
    return bcrypt.compareSync(password, this.getDataValue('encryptedPassword'))
  }

  return UserModel
}

export { User }
