const express = require("express");
const app = express();
const bookmarksController = require('./controllers/bookmarks.js')
const port = 3003
const mongoose = require('mongoose');
const cors = require('cors')

// middleware
app.use(express.json());
app.use(cors())
app.use('/bookmarks', bookmarksController)


mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))



mongoose.connect('mongodb://localhost:27017/bookmarks', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...')
})
app.listen(port, () => {
    console.log("London Calling")
});