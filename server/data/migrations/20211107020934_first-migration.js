exports.up = function (knex) {
  return knex.schema
    .createTable("tasks", (table) => {
      table.increments("task_id");
      table.string("task_name", 128)
        .notNullable();
      table.boolean("task_completed")
        .defaultTo(0);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("tasks");
};
