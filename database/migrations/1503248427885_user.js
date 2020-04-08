'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('firstname', 80).notNullable()
      table.string('lastname', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('telephone').notNullable().unique()
      table.string('document_rg',15).notNullable().unique()
      table.string('document_cpf',15).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
