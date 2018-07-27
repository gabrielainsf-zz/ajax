"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(results) {

    // TODO: get the fortune and show it in the #fortune-text div
    //alert("back from AJAX")
    let fortune = results;
    //THE LINE BELOW THIS IS JQUERY (using the DOM)
    $('#fortune-text').html(fortune);
}


function getFortune() {
	//alert("About to send AJAX");
	//THE LINE BELOW THIS IS AJAX
	$.get('/fortune', showFortune);
}

//THE LINE BELOW THIS IS JQUERY (using the DOM)
$('#get-fortune-button').on('click', getFortune);


// PART 2: SHOW WEATHER

function showWeather(results) {
	alert("The forecast is " + results['forecast'])
};

    // TODO: request weather with that URL and show the forecast in #weather-info
function getWeather(evt) {
	evt.preventDefault();

	let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

	alert("About to ask for weather");
	//THE LINE BELOW THIS IS AJAX
    $.get(url, formData, showWeather);
};

//THE LINE BELOW THIS IS JQUERY (using the DOM)
$("#weather-form").on('submit', getWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


