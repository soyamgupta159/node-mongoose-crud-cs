const express = require('express')
const { getAllBooks,
    createBook,
    getBook,
    editBook,
    deleteBook
} = require('../controllers/books')
const router = express.Router()

router
    .route('/')
    .get(getAllBooks)
    .post(createBook)

router
    .route('/:id')
    .get(getBook)
    .put(editBook)
    .delete(deleteBook)

module.exports = router