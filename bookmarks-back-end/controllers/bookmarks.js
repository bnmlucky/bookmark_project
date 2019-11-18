const express = require('express')
const bookmarks = express.Router()

bookmarks.get('/', (req, res) => {
    res.send('BOOKMARKS WITH Natalia and Pam!')
})

module.exports = bookmarks