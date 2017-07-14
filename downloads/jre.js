// Dependencies
var wget = require('../node_modules/node-wget');

var olderEpisodesURL = 'http://traffic.libsyn.com/joeroganexp/joecast';
var oldEpisodesURL = 'http://traffic.libsyn.com/joeroganexp/podcast' ;
var newestEpisodesURL = 'http://traffic.libsyn.com/joeroganexp/p' ;

function downloadLoop(url, startEpisode, endEpisode) {
	var limit = endEpisode+1;

	for (var i = startEpisode; i < limit; i++) {
		
		var episodeNumber = i.toString();
		var extention =  episodeNumber + '.mp3';
		var episodeURL = url + extention;

		wget(episodeURL, function(error, res) {
				if(error) {
					console.log('--- error:');
	            	console.log(error);            // error encountered
				} else {
					console.log(res.filepath + " downloaded");
				}
		});
	} // end of loop
}	// end of DL function 




// olderEpisodesURL joecast
// start: 1
// end:37

// oldEpisodesURL podcast
// start: 38
// end:129

// newestEpisodesURL  p
// start: 130
// end:987

// *****************************************************
// uncomment the parts below to download each section
// *****************************************************
downloadLoop(olderEpisodesURL,1,37);
// downloadLoop(oldEpisodesURL,38,129);
// downloadLoop(newestEpisodesURL,130,987);


