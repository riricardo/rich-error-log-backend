const express = require("express");
const controller = require("../controllers/ErrorController");
const authenticateToken = require("../middleware/AuthenticationMiddleware");

const router = express.Router();

router.get("/", authenticateToken, controller.getErrors);

router.post("/", controller.createError);

module.exports = router;
