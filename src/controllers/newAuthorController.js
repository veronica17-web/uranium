const newauthorModel = require("../models/newauthorModel")


const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await newauthorModel.create(author)
    res.send({data: authorCreated})
}

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
//}

module.exports.createAuthor= createAuthor
// module.exports.getAuthorsData= getAuthorsData