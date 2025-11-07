const express = require("express");
const controller = require("../controllers/TenantController");
const authenticateToken = require("../middleware/AuthenticationMiddleware");

const router = express.Router();

router.get("/", authenticateToken, controller.getKeys);

router.post("/", authenticateToken, controller.createKey);

module.exports = router;
