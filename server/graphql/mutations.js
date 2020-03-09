import { User } from '../db'
import R from 'ramda'

export const mutations = {
  Mutation: {
    createUserWithEmail: async (
      _,
      {
        input: {
          email,
          firstName,
          lastName,
          admin,
          password,
          passwordConfirmation
        }
      }
    ) => {
      const user = await User.create({
        email,
        firstName,
        lastName,
        admin,
        password: { password, passwordConfirmation }
      })
      return R.pickAll(['id', 'email', 'firstName', 'lastName', 'admin'], user)
    },
    updateUser: async (
      _,
      { email, password, passwordConfirmation, admin, firstName, lastName }
    ) => {
      console.log(
        email,
        password,
        passwordConfirmation,
        admin,
        firstName,
        lastName
      )
      // TODO: update a user
    }
  }
}
