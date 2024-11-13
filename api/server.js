const express = require("express");
const helmet = require("helmet");
const taskRouter = require("./task/router");
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/tasks", taskRouter);
server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
