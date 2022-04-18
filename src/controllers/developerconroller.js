const developerModel = require("../models/developer")
const batchmodule = require( "../models/batchmodule")


const developer = async function( req,res){
    let data = req.body
    const developercreate = await developerModel.create(data)
    res.send({create: developercreate})
}
const scholarship=async function (req,res) {
        const female=await developerModel.find({"gender":'female',"percentage":{$gte:70}})
        res.send({msg:female})
    }

const details = async function( req, res){
   const program = await batchmodule.find( { 'program': "625d8eb287cdde4e8e0d31f4"} )
    const developer = await developerModel.find( {"persentage":{$gte:70}})
    res.send( { developer , program})
}




module.exports.developer = developer
module.exports.scholarship =scholarship
module.exports.details= details
// const scholarship=async function (req,res) {
//     const female=await developerModel.find({gender:'female',percentage:{$gte:70}})
//     res.send({msg:female})
// }
