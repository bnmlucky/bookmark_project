const express = require('express')
const bookmarks = express.Router()
const Bookmark = require('../models/bookmarks.js')


///////////////ROUTES//////////////////////////

//index - get
bookmarks.get('/', (req, res) => {
    //res.send('BOOKMARKS WITH Natalia and Pam!')
    //this will display the bookmarks on the browser as an array of objects
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
//delete
bookmarks.delete('/:id', (req, res) => {
    Bookmark.findByIdAndRemove(req.params.id, (error, deletedBookmark) => {
        if (error) {
            res.status(400).json({ error: errormessage })
        }
        res.status(200).send(deletedBookmark)

    })
})
//update
bookmarks.put('/:id', (req, res) => {
    Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedBookmark) => {
        if (error) {
            res.status(400).json({ error: errormessage })
        }
        res.status(200).send(updatedBookmark)
    })
})







module.exports = bookmarks