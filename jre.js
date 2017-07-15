// Dependencies
var wget = require('../node_modules/node-wget');

// this will be used to get the episodeURL
var startEpisode = ''//some user input
var endEpisode = '' //some user input




function downloadLoop(url, startEpisode, endEpisode ) {
	var limit = endEpisode+1;
	var dlPage ='http://podcasts.joerogan.net/wp-admin/admin-ajax.php?action=launch_popout_player&episodeNum=';

	// loop using the user input as iterations
	for (var i = startEpisode; i < limit; i++) {
		
		var episodeNumber = i.toString();
		dlUrl = dlPage+episodeNumber;


		episodeURL ='' 
		//this will come from scraping the dlUrl for the matching episode number and the following path;
		//body> div class='popoutwrapper' > ul id="popout-tracks" > li id="episode-[number]" > data-stream-url="[someURL]"
						
		episodeTitle = ''
		//body> div class='popoutwrapper' > ul id="popout-tracks" > li id="episode-[number]" > span class="podcast-title" 
		
		episodeGuest = ''
		//body> div class='popoutwrapper' > ul id="popout-tracks" > li id="episode-[number]" > div class="popout-track-details" >
		

		wget({
		        url:  episodeURL,
		        dest: '/tmp/'     // destination path or path with filenname, default is ./ 
	    	}, function(error, res) {
				if(error) {
					console.log('--- error:');
	            	console.log(error);            // error encountered
				} else {
					console.log(res.filepath + " downloaded");
				}
		});
	} // end of loop
}	// end of DL function 






