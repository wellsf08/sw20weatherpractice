// api.openweathermap.org/data/2.5/weather?zip=53590,US&appid=bf12409cb9c22bf3ebf6fc88ae067747  

//api key: bf12409cb9c22bf3ebf6fc88ae067747  

//Zip Code api call: https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}

$("#search_btn").click(function() {
	
	var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
	var apiKey = 'bf12409cb9c22bf3ebf6fc88ae067747';
	var zipInput = $('#zipCode').val() + ',us';
	var units = '&units=imperial';
	var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey + units;
	
	console.log(apiURL)
	
	$.get(apiURL, function(responseFromOW){
		console.log(responseFromOW);
		console.log("temp:", responseFromOW.main.temp);
		console.log("city", responseFromOW.name);
		console.log("condition", responseFromOW.weather[0].description);
		
		var temp = responseFromOW.main.temp;
		var city = responseFromOW.name;
		var condition = responseFromOW.weather[0].description;
		
		$.ajax({
        url: apiURL,
        success: function(weather) {
            console.log(weather);
            $("#weather").html('<h1>' + city + '</h1>' + '<h1>' + temp + '</h1>' + '<h3>' + condition + '</h3>');
        }
        });
    });
});