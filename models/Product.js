const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    isFruit: Boolean
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product