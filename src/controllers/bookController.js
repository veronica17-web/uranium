const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
//2
const getBooklist= async function (req, res) {
    let allBooks= await BookModel.find(  { authorName : "robert"  }  )
    res.send({msg: allBooks})
}
//3
const getBooksInYear= async function (req, res) {
    let yearDate= req.body.year

    let bookyear= await BookModel.find( {year : yearDate})
    res.send({msg: bookyear})
}
 
//4
const getParticularBooks= async function (req, res) {
    let getobj= req.body

    let particular= await BookModel.find( getobj)
    res.send({msg:particular })
}

//5
const getXINRBooks= async function (req, res) {
    let income= await BookModel.find({"prices.indianPrice" : {$in :["200INR" , "300INR" , "800INR"]}} )
    res.send({msg: income})
}

const getRandomBooks= async function (req, res) {
    let income= await BookModel.find({ stockAvailable : false , totalPages : { $gt:200}})
    res.send({msg: income})
}

module.exports.createBook= createBook
module.exports.getBooklist = getBooklist
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks