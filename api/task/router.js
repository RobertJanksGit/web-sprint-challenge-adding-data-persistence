const router = require("express").Router();
const Tasks = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const tasksArray = await Tasks.get();
    res.status(200).json(tasksArray);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await Tasks.getById(id);
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const task = await Tasks.add(req.body);
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
});
router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong inside router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
