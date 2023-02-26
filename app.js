const express = require('express')

const app = express();

const lyricsFinder = require('lyrics-finder');


app.get('/', async (req, res) => {
 let lyrics = await lyricsFinder(req.query.artist, req.query.title) || "No lyrics available!";
 console.log(lyrics);
  res.send(lyrics)
})

app.listen(4000)