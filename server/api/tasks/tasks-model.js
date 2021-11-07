const db = require("./../../data/db-config");

const getAll = async () => {
  const tasks = await db("tasks");
  return tasks;
};

module.exports = {
  getAll
};
