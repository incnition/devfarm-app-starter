const { factory } = require('factory-girl');
const faker = require('faker');
const db = require('../server/db');
const { encryptedPassword } = require('../server/utils');

factory.define('User', db.User, {
  email: () => faker.internet.exampleEmail(),
  firstName: () => faker.name.findName(),
  lastName: () => faker.name.lastName(),
  encryptedPassword: () => encryptedPassword(faker.internet.password()),
  admin: true,
});

module.exports = factory