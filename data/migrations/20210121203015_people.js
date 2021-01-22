
exports.up = async function(knex) {
  await knex.schema.createTable("people", table => {
      table.increments("id")
      table.text("name").notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("people")
};
