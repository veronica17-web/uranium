const express = require('express');
const logger = require('./logger')

const router = express.Router();
//problem 1
router.get('/movies', function (req,res){
    const arr = ["rrr", "pushps", "radheshyam", "venom", "wonder women"]
    res.send(arr)
})
//problem 2 and 3
router.get( '/movies/:indexnumber', function( req,res){
    const arr = ["rrr", "pushps", "radheshyam", "venom", "wonder women"]
    const id = req.params.indexnumber
    if ( id <= arr.length){
        res.send( arr[id])
    } else{
        res.send("invalid")
    }
})

//problem 4
router.get( '/films',function( req,res){
    const example = [ {
        "id": 1,
        "name": "rrr"
       }, {
        "id": 2,
        "name": "pushpa"
       }, {
        "id": 3,
        "name": "radheshayam"
       }, {
        "id": 4,
        "name": "venom"
    }, {
        "id": 5,
        "name": "wonder women"
       }]
           
        res.send(example)

})

//problem 5
router.get( '/films/:filmid', function( req,res){
    const example = [ {
        "id": 1,
        "name": "rrr"
       }, {
        "id": 2,
        "name": "pushpa"
       }, {
        "id": 3,
        "name": "radheshayam"
       }, {
        "id": 4,
        "name": "venom"
    }, {
        "id": 5,
        "name": "wonder women"
       }]
           const id = req.params.filmid ;
           if ( id<= example.length){
           res.send( example[id])
           }else {
               res.send("not found")
           }
})        

module.exports = router;
// adding this comment for no reason

 