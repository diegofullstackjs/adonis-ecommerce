'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoryProductSchema extends Schema {
  up () {
    this.create('category_products', (table) => {
      table.increments()
      table.string('category_name').notNullable().unique()
      table.text('description').notNullable()
      table.string('seo_description').notNullable()
      table.string('seo_keyword').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('category_products')
  }
}

module.exports = CategoryProductSchema
