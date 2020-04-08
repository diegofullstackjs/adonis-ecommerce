'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserAddressSchema extends Schema {
  up () {
    this.create('user_addresses', (table) => {
      table.increments()
      table.integer('user_id')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('cascade')
                .onUpdate('cascade')
      table.enu('home_type',['Casa','Apartamento','Comercial']).defaultTo('Casa')
      table.string('address',100).notNullable()
      table.string('postcode',8).notNullable()
      table.string('city',100).notNullable()
      table.integer('state_id')
                  .unsigned()
                  .references('id')
                  .inTable('tate_of_brazils')
                  .onDelete('cascade')
                  .onUpdate('cascade')
      table.string('complement',100)
      table.string('phone',30).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_addresses')
  }
}

module.exports = UserAddressSchema
