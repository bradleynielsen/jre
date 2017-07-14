// Dependencies
var wget = require('../node_modules/node-wget');

// this will be used to get the episodeURL
var startEpisode = ''//some user input
var endEpisode = '' //some user input



function downloadLoop(startEpisode, endEpisode) {
	var dlPage ='http://podcasts.joerogan.net/wp-admin/admin-ajax.php?action=launch_popout_player&episodeNum=';
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






