const express = require('express');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 1337;

app.use('/', express.static(__dirname+'/public'));

app.get('/', function(req, res){
  res.render('index');
  console.log('on the page!')
  var url = "http://traffic.libsyn.com/joeroganexp/jrefight01.mp3";
  console.log('before wget')
  wget(url);
  console.log('after wget');


  
});

app.listen(port, function (err) {
  if (err){
    console.log('Disaster! Server error: '+ err);
  } else {
    console.log("You're listening to the smooooth sounds of radio free Joe Rogan Podcast Stealing Scraper on port "+ port);
  }
});
