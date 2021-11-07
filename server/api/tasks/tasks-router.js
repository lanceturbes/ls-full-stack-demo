const express = require("express");
const Task = require("./tasks-model");
const { handleError } = require("./../middleware");

const TasksRouter = express.Router();

TasksRouter.get("/",
  async (req, res, next) => {
    try {
      const tasks = await Task.getAll();
      res.status(200).json(tasks);
    } catch (err) {
      next(err);
    }
  }
);

TasksRouter.use(handleError);

module.exports = TasksRouter;
