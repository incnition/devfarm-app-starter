const { factory } = require('factory-girl');
const faker = require('faker');
const db = require('../db');
// console.warn("db: ", db)
// console.warn("USER: ", db.User)
const { encryptedPassword } = require('../utils');

factory.define('User', db.User, {
  email: () => faker.internet.exampleEmail(),
  firstName: () => faker.name.findName(),
  lastName: () => faker.name.lastName(),
  encryptedPassword: () => encryptedPassword(faker.internet.password()),
  admin: true,
});

module.exports = factory