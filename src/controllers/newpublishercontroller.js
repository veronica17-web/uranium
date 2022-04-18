
const newpublishermodule = require("../models/newpublishermodule")


const createpublishers = async function( req , res){
   let data = req.body
   let newpublisher = await newpublishermodule.create(data)
   res.send({ data : newpublisher})
}

module.exports.newpublisher = createpublishers