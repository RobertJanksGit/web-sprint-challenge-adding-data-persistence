const express = require("express");
const helmet = require("helmet");
const taskRouter = require("./task/router");
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/task", taskRouter);
server.use("/api/project", projectRouter);
server.use("/api/resource", resourceRouter);

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
