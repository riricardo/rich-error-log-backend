const express = require("express");
const controller = require("../controllers/TenantController");

const router = express.Router();

router.get("/", controller.getKeys);

router.post("/", controller.createKey);

module.exports = router;
