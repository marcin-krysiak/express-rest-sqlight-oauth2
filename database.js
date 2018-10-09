const Sequelize = require('sequelize')
const epiloque = require('epilogue')

const database = new Sequelize({
  dialect: 'sqlite',
  storage: 'test.sqlite',
  operatorsAliases: false
})

const Contacts = database.define('contacts', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  description: Sequelize.TEXT
})

const initializeDatabase = async app => {
  epiloque.initialize({ app, sequelize: database })

  epiloque.resource({
    model: Contacts,
    endpoints: ['/contacts', '/contacts/:id']
  })

  await database.sync()
}

module.exports = initializeDatabase
