const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    totalPages : String,       
    
    stockAvailable: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: {type: Number, default: 2021}
}, { timestamps: true });


module.exports = mongoose.model('myusers', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover


//Create a books collection in your DB ( using bookModel with following fields)-
//  bookName( mandatory field),price containing Indian and european price, year 
//  ( should be 2021 if no year is provided) , tags array, authorName, totalPages ,
//   stockAvailable ( true false) 

