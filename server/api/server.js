const express = require("express");
const TasksRouter = require("./tasks/tasks-router");
const { logger } = require("./middleware");

const server = express();

server.use(express.json());
server.use("/api/tasks", TasksRouter);
server.use(logger);

module.exports = server;
