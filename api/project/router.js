const router = require("express").Router();
const Projects = require("./model");

router.get("/", (req, res, next) => {
  try {
    res.status(200).json({ message: "This is working" });
  } catch (err) {
    next(err);
  }
});
router.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "something went wrong inside the recipes router",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
