// Init router
const { Router } = require("express");
const {
  getDemo,
  postDemo,
  postDemoWithId,
} = require("../controllers/demoController");

const router = Router();

router.get("/", getDemo);
router.post("/", postDemo);
router.post("/test/:id", postDemoWithId);
module.exports = router;
