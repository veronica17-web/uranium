const batchModel = require("../models/batchmodule")


const batch = async function( req,res){
    let data = req.body
    const batchcreate = await batchModel.create(data)
    res.send({create: batchcreate})
}

module.exports.batch= batch