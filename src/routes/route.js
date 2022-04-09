const express = require('express');
const { route } = require('express/lib/application');
const logger = require('./logger')

const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]
 
       //router.post('/players',function (req, res) {
        router.post('/players',function (req, res){
         let insert = req.body;
    for ( let i=0;i<players.length;i++){
    if( players[i].name==insert.name)
     return res.send(  {mes : "already existing"})
     }
   players.push( insert);
   res.send( players)
     })


module.exports = router;
// adding this comment for no reason

