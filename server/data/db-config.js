const knex = require("knex");
const configs = require("./../knexfile");
const mode = process.env.NODE_ENV || "development";

module.exports = knex(configs[mode]);
