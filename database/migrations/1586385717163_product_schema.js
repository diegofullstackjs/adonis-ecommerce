'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('product_name').notNullable()
      table.float('price').notNullable()
      table.string('short_description').notNullable()
      table.text('description').notNullable()
      table.string('thumb_image').notNullable()
      table.integer('category_id').unsigned()
                  .references('id')
                  .inTable('category_products')
                  .onDelete('cascade')
                  .onUpdate('cascade')
      table.integer('subcategory_id').unsigned()
                  .references('id')
                  .inTable('subcategory_products')
                  .onDelete('cascade')
                  .onUpdate('cascade')
      table.integer('in_stock').defaultTo(1)
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
