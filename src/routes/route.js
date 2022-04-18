const express = require('express');
const router = express.Router();
const developerconroller = require("../controllers/developerconroller")
const batchcontroller =require("../controllers/batchconroller")

router.post("/developers",developerconroller.developer)

router.post('/batch',batchcontroller.batch)

router.get("/scholarship",developerconroller.scholarship)

router.get("/details", developerconroller.details)
module.exports = router;