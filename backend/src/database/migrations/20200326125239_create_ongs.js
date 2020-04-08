exports.up = function (knex) {
  return knex.schema.hasTable(`ongs`, (exists) => {
    if (!exists) {
      knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
      })
    }
  })
};

exports.down = function (knex) {
  return knex.schema.hasTable(`ongs`, (exists) => {
    if (exists) {
      return knex.schema.dropTable('ongs');
    }
  });
};
