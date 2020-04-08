'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductOptionSelectedSchema extends Schema {
  up () {
    this.create('product_option_selecteds', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('product_option_selecteds')
  }
}

module.exports = ProductOptionSelectedSchema
