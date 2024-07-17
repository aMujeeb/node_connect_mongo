const mongoose = require('mongoose');

//Schema blue print for the document with constraints
const productSchema = new mongoose.Schema({
    name : { type: String, required : true },
    price : { type: Number, required : true }
});

module.exports = mongoose.model('Products', productSchema); //'Products' will refer to the Document type in the Collection