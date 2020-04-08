'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StateOfBrazilSchema extends Schema {
  up () {
    this.create('state_of_brazils', (table) => {
      table.increments()
      table.string('state_name',50).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('state_of_brazils')
  }
}

module.exports = StateOfBrazilSchema
