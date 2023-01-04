const express = require('express')
const Product = require('./models/Product')
const bookRouter = require('./routers/bookRouter')
const app = express()
app.use(express.json())

const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/shopApp').then(() => {
    console.log('connected to mongo')
});

app.use('/products', bookRouter)




app.listen(5000, () => {
    console.log('server is running')
})