var city = $("#city");

var apiKey = "cefe799397a3317ff6a38706ef3ba7cc";

var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;

$.ajax({
  url: queryURL,
  method: "GET"
})

    .then(function(response) {
        console.log(queryURL);
        console.log(response);
});
