'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubcategoryProductSchema extends Schema {
  up () {
    this.create('subcategory_products', (table) => {
      table.increments()
      table.integer('category_id').unsigned()
                    .references('id')
                    .inTable('category_products')
                    .onDelete('cascade')
                    .onUpdate('cascade')
      table.string('subcategory_name',100).notNullable()
      table.string('seo_description').notNullable()
      table.string('seo_keyword').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('subcategory_products')
  }
}

module.exports = SubcategoryProductSchema
