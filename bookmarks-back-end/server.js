const express = require("express");
const app = express();
const bookmarksController = require('./controllers/bookmarks.js')
const port = 3003



app.use('/bookmarks', bookmarksController)

app.listen(port, () => {
    console.log("London Calling")
});