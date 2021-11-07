const seed = function (knex) {
  return knex("tasks").insert([
    {
      task_name: "take out the trash",
      task_completed: 1
    },
    {
      task_name: "walk the dog",
      task_completed: 0
    }
  ]);
};

module.exports = { seed };
