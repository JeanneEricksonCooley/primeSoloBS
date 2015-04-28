var array = [];

var apikey = '10d0a85137d94904c75e456dcdf91468227c09ca'; // Put your API key here


// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
function searchCallback(results) {
    for (var j = 0; j < 9; j++) {
		console.log(results[j]);

		$(".games").append("<div class='col-md-4 well'><button class='btn btn-small bob'>REMOVE</button><p>" + results[j].name + "</p><br> <p>" + results[j].deck + "</p><br><img src='" + results[j].image.medium_url + "'/></p></div>");
	}
}

//function displayStuff(results) {

//}



// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){

	$.ajax ({
	    type: 'GET',
	    dataType: 'jsonp',
	    crossDomain: true,
	    jsonp: 'json_callback',
	    url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	    complete: function() {
	        console.log('ajax complete');
	    },
	    success: function(data) {
	        searchCallback(data.results);
	    }
	});

}

	$(document).ready(function() {

		// Start the search here!
		search('batman');

		$(".games").on("click", ".bob", function () {
			$(this).parent().remove();
		});
	});

/*
<div class="games">
	<div class="game">
	...
		<button class="btn btn-small bob"></button>
	</div>
</div>


 */