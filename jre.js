// Dependencies
var wget = require('node-wget');

var olderEpisodesURL = 'http://traffic.libsyn.com/joeroganexp/joecast'
var newerEpisodesURL = 'http://traffic.libsyn.com/joeroganexp/p' 

function downloadLoop(url, startEpisode, endEpisode) {
	var i = startEpisode;
	var limit = endEpisode+1;
	console.log(limit);
	while ( i < limit) {
		var episodeNumber = i.toString();
		var extention =  episodeNumber + '.mp3';
		var episodeURL = url + extention;
		console.log(i);
		console.log(episodeURL)

		wget(episodeURL, function(error, data) {
				if(error) {
					console.log('--- error:');
	            	console.log(error);            // error encountered
				} else {
					console.log("file " + i + " downloaded.")
				}
		});

		i++;
	}
	console.log("Done!")
	i=0;
}	 
console.log("downloader stoped");
downloadLoop(newerEpisodesURL,1,129);