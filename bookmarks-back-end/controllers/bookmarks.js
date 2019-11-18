const express = require('express')
const bookmarks = express.Router()
const Bookmark = require('../models/bookmarks.js')


///////////////ROUTES//////////////////////////

//index - get
bookmarks.get('/', (req, res) => {
    //res.send('BOOKMARKS WITH Natalia and Pam!')
    Bookmark.find({}, (error, foundBookmarks) => {
        if (error) {
            res.status(400).json({ error: errormessage })
        }
        res.status(200).send(foundBookmarks)
    })
})


//create
bookmarks.post('/', (req, res) => {
    Bookmark.create(req.body, (error, createdBookmark) => {
        if (error) {
            res.status(400).json({ error: errormessage })
        }
        res.status(200).send(createdBookmark)

    })
})

bookmarks.delete('/:id', (req, res) => {
    Bookmark.findByIdAndRemove(req.params.id, (error, deletedBookmark) => {
        if (error) {
            res.status(400).json({ error: errormessage })
        }
        res.status(200).send(deletedBookmark)

    })







    module.exports = bookmarks