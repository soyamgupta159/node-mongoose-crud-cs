const Product = require('../models/Product')

exports.getAllBooks = async (req, res) => {
    const products = await Product.find()
    res.status(200).json({
        status: "success",
        data: {
            products
        }
    })
}

exports.getBook = async (req, res) => {
    const id = req.params.id
    const product = await Product.findById(id)
    res.status(200).json({
        status: "success",
        data: {
            product
        }
    })
}

exports.createBook = async (req, res) => {
    // console.log(req.body)
    // res.send('body sent')
    const newProduct = new Product(req.body)
    await newProduct.save()
    const updatedProducts = await Product.find()
    res.status(200).json({
        status: "success",
        data: {
            updatedProducts
        }
    })
}

exports.editBook = async (req, res) => {
    const id = req.params.id
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json({
        status: "success",
        data: {
            updatedProduct
        }
    })
}

exports.deleteBook = async (req, res) => {
    const id = req.params.id
    await Product.findByIdAndDelete(id)
    const updatedProducts = await Product.find()
    res.status(200).json({
        status: "success",
        data: {
            updatedProducts
        }
    })
}