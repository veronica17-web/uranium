const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
//const getBooksInYear = require("../controllers/bookController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBookslist", BookController.getBooklist)

router.post("/getBooksInYear",BookController.getBooksInYear)

router.post( "/getParticularBooks",BookController.getParticularBooks)

router.get("/getXINRBooks",BookController.getXINRBooks)

router.get( "/getRandomBooks",BookController.getRandomBooks)


// createBook : to create a new entry..use this api to create 11+ entries in your collection
// bookList : gives all the books- their bookName and authorName only 
//router.post("/createBook",BookController.createBook)

module.exports = router;
