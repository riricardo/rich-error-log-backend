const express = require("express");
const controller = require("../controllers/ErrorController");

const router = express.Router();

router.get("/", controller.getErrors);

router.post("/", controller.createError);

module.exports = router;
