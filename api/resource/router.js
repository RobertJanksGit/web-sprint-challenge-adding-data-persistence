const router = require("express").Router();
const Resources = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const resourcesArray = await Resources.get();
    res.status(200).json(resourcesArray);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const resource = await Resources.getById(id);
    res.status(200).json(resource);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const resource = await Resources.add(req.body);
    res.status(201).json(resource);
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
