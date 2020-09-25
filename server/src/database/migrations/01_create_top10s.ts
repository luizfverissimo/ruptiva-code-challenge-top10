import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('top10s', (table) => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.string('items').notNullable()

    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('top10s')
}
