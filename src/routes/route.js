const express = require('express');
const router = express.Router();

const authorController= require("../controllers/newAuthorController")
const newbookController= require("../controllers/newBookController")
const newpublishercontroller = require( "../controllers/newpublishercontroller")


router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/Books", newbookController.createBook )

router.post("/newpublisher",newpublishercontroller.newpublisher)

router.get('/createBook',newbookController.createBook)

router.get("/fetchData",newbookController.fetchData)

router.put('/updating',newbookController.updating)

router.put('/inc',newbookController.inc)
module.exports = router