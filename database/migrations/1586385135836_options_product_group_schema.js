'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OptionsProductGroupSchema extends Schema {
  up () {
    this.create('options_product_groups', (table) => {
      table.increments()
      table.integer('option_id').unsigned()
                         .references('id')
                         .inTable('options_products')
                         .onDelete('cascade')
                         .onUpdate('cascade')
      table.string('option_name').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('options_product_groups')
  }
}

module.exports = OptionsProductGroupSchema
