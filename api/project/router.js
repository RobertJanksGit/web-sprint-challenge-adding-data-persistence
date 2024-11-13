const router = require("express").Router();
const Projects = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const projectsArray = await Projects.get();
    res.status(200).json(projectsArray);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const project = await Projects.getById(id);
    res.status(200).json(project);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const project = await Projects.add(req.body);
    res.status(201).json(project);
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
