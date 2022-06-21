const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    name:{type:String, unique: true},
    model:{type:String, required:true},
    quantity:{type:Number, default:5},
    price:{type:Number},
    ratings:{type:String},
    image:{type:String}
},{versionKey:false})

const ProductsModel = mongoose.model('products',DataSchema);
module.exports = ProductsModel;