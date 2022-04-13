const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
const bookandauthorController= require("../controllers/book and authorController")

router.post('/author',bookandauthorController.author)

router.post('/createBook',bookandauthorController.createBook)

router.get('/bookByChetan',bookandauthorController.bookByChetan)

router.get('/findingTwoStates',bookandauthorController.findingTwoStates) 

router.get('/findbook',bookandauthorController.findbook) 

module.exports = router;