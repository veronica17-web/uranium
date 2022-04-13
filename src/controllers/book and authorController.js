//const { count } = require("console")
const BookModel= require("../models/bookModel")
const authormodel = require("../models/authormodel")
const bookModel = require("../models/bookModel")
const { get } = require("express/lib/request")


const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const author= async function (req, res) {
    let data= req.body
    let author= await authormodel.create(data)
    res.send({msg: author})
}
 //2
const bookByChetan = async function (req, res) {
 let authordetail = await authormodel.findOne( {author_name :"Chetan Bhagat"})
 console.log(authordetail)
 const getauthorID = authordetail.author_id
 const allBooks = await bookModel.find({author_id: getauthorID}).select({name : 1, _id : 0})
 res.send( { book : allBooks})
}

//3
const findingTwoStates = async function (req, res) {
    const findUpdate = await bookModel.findOneAndUpdate(
        {name : "Two states"}, { $set : {price : 100} } , { new : true})

        const getAuthorID = findUpdate.author_id
        const getprice = await bookModel.findOne({ author_id: getAuthorID}).select({price : 1, _id:0})
        const booknames = await authormodel.findOne({ author_id: getAuthorID}).select({author_name : 1, _id:0})
    res.send( { updatend : getprice , booknames})
}
//4
const findbook = async function (req, res) {
    const range = await bookModel.find( { price : { $gte:50 , $lte : 100}}).select({author_id :1, _id :0})
    let newarr =[]
    for( i = 0 ; i < range.length ; i ++){
        const authorid = range[i].author_id
        console.log(authorid)
        newarr = await authormodel.findOne({ author_id : authorid}).select({author_name : 1, _id : 0})
        
    }
    res.send( {data : newarr})
}

module.exports.createBook =createBook
 module.exports.author = author
 module.exports.bookByChetan = bookByChetan
 module.exports.findingTwoStates = findingTwoStates
 module.exports.findbook = findbook