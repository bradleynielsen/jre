const express = require('express');
const path = require('path');
const request = require('request');
const cheerio = require('cheerio');
const bodyParser = require('body-parser');
const wget = require('node-wget');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 1337;

app.use('/', express.static(__dirname+'/public'));

app.get('/', function(req, res){
  res.render('index');
  console.log('on the page!')
  var url = "http://traffic.libsyn.com/joeroganexp/jrefight01.mp3";  
});

var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.post('/', urlencodedParser, function(req, res){
  console.log(req.body);
  var userNum = req.body.userData

  for (var i = userNum; i > 0 ; i-=5){

    var pageURL = 'http://podcasts.joerogan.net/wp-admin/admin-ajax.php?action=launch_popout_player&episodeNum='+i;

    request(pageURL, function(err, resp, body){
      var $ = cheerio.load(body);
      $('#popout-tracks li').each(function(){
        var podURL = $(this).attr('data-stream-url');
        if(podURL !== undefined) {
          wget({
                  url:  podURL,
                  dest: './audio_files/',      // destination path or path with filenname, default is ./ 
                  timeout: 2000       // duration to wait for request fulfillment in milliseconds, default is 2 seconds 
              },
              function (error, response, body) {
                  if (error) {
                      console.log('--- error:');
                      console.log(error);            // error encountered 
                  } else {
                      //console.log('--- headers:');
                      console.log(response.headers); // response headers 
                      console.log('--- body:');
                      //console.log(body);             // content of package 
                  }
              }
          );
        }
      });
    });

  }
 // res.sendFile(__dirname + '/index.html');
res.sendFile(__dirname +'/public/confirm.html')

});


app.listen(port, function (err) {
  if (err){
    console.log('Disaster! Server error: '+ err);
  } else {
    console.log("You're listening to the smooooth sounds of radio free Joe Rogan Podcast Stealing Scraper on port "+ port);
  }
});
