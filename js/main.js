//Activity 2/3 Theodore Gundlach Geography 575
//initialize function called when the script loads
function initialize(){
	cities();
};
console.log("test")
//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{
			city: 'Berlin',
			population: 6004857
		},
		{
			city: 'Stuttgart',
			population: 5200000
		},
		{
			city: 'Hamburg',
			population: 5107429
		},
		{
			city: 'Munich',
			population: 2606021
		},
	];

		//append the table element to the div
		$("#mydiv").append("<table>");

		//append a header row to the table
		$("table").append("<tr>");

		//add the "City" and "Population" columns to the header row
		$("tr").append("<th>City</th><th>Population</th>");

		//loop to add a new row for each city
		for (var i = 0; i < cityPop.length; i++){
			//assign longer html strings to a variable
			var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
			//add the row's html string to the table
			$("table").append(rowHtml);
		};
//defines columns for citypop variable and creates defines adding events
    addColumns(cityPop);
    addEvents();

};

console.log("test")
//calls the function to add columns for the citypop variable
function addColumns(cityPop){

    $('tr').each(function(i){
//begins the if else loop of defining city size based on population
    	if (i == 0){

    		$(this).append('<th>City Size</th>');
    	} else {

    		var citySize;
//if the population is less than 100000 then its small
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
//if the population is less than 500000 then its medium
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
//if the population is less than inifinity then its large
    		} else {
    			citySize = 'Large';
    		};
//adds the citySize variable to the table
    		$(this).append('<td>' + citySize + '</td>');
    	};
	});
};
console.log("test")
//creates function to call mouseover events
function addEvents(){

		$('table').mouseover(function(){
//sets the mouseover function to change color and label the rgb value
				var color = "rgb(";

				for (var i=0; i<3; i++){
//applies randomized color to mouseover function
							var random = Math.round(Math.random() * 255);

							color += random;

							if (i<2){

									color += ",";

							} else {

									color += ")";
							}
				};
//stylizes the color with css capability
				$(this).css('color', color);
		});

console.log("test")
//adds function of clicking
function clickme(){
//creates alert window that says hey you clicked me
		alert('Hey, you clicked me!');
	};
//
	$('table').on('click', clickme);
};
console.log("test")
//callback function allows data to be stored in the div
function debugCallback(response){

	mydata = response

		$("#mydiv").append('<br>GeoJSON data: ' + JSON.stringify(mydata));
};

console.log("test")
//function to retrieve data from the local geojson file
function debugAjax(){
//assigns the variable to the data
		var mydata;
//ajax jquery
		$.ajax("data/MegaCities.geojson", {

				dataType: "json",
//takes the read data from the geojson and assigns it as a response and stores it in the variable
				success: function(response){

			mydata = response;

			debugCallback(mydata);

			console.log(mydata)
			}

		});
//the undefined data console log
console.log('Cannot define: ' + mydata);

};
//engage table and geojson data once the page is loaded
$(document).ready(cities);
$(document).ready(debugAjax);
