'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OptionsProductSchema extends Schema {
  up () {
    this.create('options_products', (table) => {
      table.increments()
      table.string('name',100).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('options_products')
  }
}

module.exports = OptionsProductSchema
