const config = {
    apiKey: "AIzaSyB8GZIm_1SEoqo4gVr_l0e-cRgJ6GDBPA0",
    authDomain: "here-or-there.firebaseapp.com",
    databaseURL: "https://here-or-there.firebaseio.com",
    projectId: "here-or-there",
    storageBucket: "here-or-there.appspot.com",
    messagingSenderId: "448013417470"
  };
  
  firebase.initializeApp(config);
  
  var dbRef = firebase.database().ref();
  // create function to call the openweathermap api



  
  var appID = "bff087f159c4f0f8f86174f72117926c";
  
  function getWeatherInfo(location, callback) {
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=" + appID;
  
    $.getJSON(weatherUrl, function(json) {
        callback({
          city: json.name,
          main: json.weather[0].main,
          description: json.weather[0].description,
          image: "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png",
          temp: json.main.temp,
          pressure: json.main.pressure,
          humidity: json.main.humidity
        });
    });
  }
  
  // queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
  // the user hits the search button
  function addWeatherToFirebase(cityName) {
    event.preventDefault();
    
    let weather = {
      city: cityName
    };
    dbRef.push(weather);
    return weather;
  }

  var numArticles = 10;
  

// METHODS
// ============================= ============================
// ************************Code below for City1 News Results***********************************

$("#textInput1").keyup(function(event) {
if (event.keyCode === 13) {
  $("#btn1").click();
 // $("#textInput1").val ("");
}
});
  
  $("#btn1").on("click", function(event1) {  //Anna added function name
    var cityName = $("#textInput1").val();
   // $("#textInput1").val("");  //Anna comment out to preserve search box
  
    getWeatherInfo(cityName, function(data) {
      $("#city1a").html(data.city);  //Anna comment out to preserve search box
      $("#main_weather1").html(data.main);
      $("#description_weather1").html(data.description);
      $("#weather_image1").attr("src", data.image);
      let ftemp = ((data.temp - 273.15) * 1.8) + 32;
      let t = Math.floor(ftemp);
      $("#temperature1").html(`${t} &#8457;`);
      $("#pressure1").html(data.pressure);
      $("#humidity1").html(data.humidity);
      $("#leftPanelWeather").removeClass("hidden");
  
      // $(".left-panel").show();
  
      addWeatherToFirebase(cityName);
    });

    event1.preventDefault();  
    
     // Initially sets the articleCounter to 0
     articleCounter = 0;
     
       // Empties the region associated with the articles
       $("#info1").empty();
  
       
      // These variables will hold the results we get from the user's inputs via HTML
      // Grabbing text the user typed into the search input
      var searchTerm = $("#textInput1").val().trim();
      console.log ($("#textInput1"))
  
      var currentDate = Date.now();
      // To display the name of the city
      //$("#city1").html("searchTerm");
  
      //var searchURL = url + searchTerm;
  
       var searchURL = 'https://newsapi.org/v2/everything?' +
       'q="' +searchTerm+ '"&'+
       'from="' +currentDate+ '"&'+
       //'from=2018-01-27&' +
       'sortBy=popularity&' +
       'apiKey=0ecb5163eefb43e6b9eb82d77829f5e4';
       console.log(searchURL);
       //var req = new Request(searchURL);
       
       var newsSection = $("#info1");
       
       
       
       // This runQuery function expects two parameters:
       // (the number of articles to show and the final URL to download data from)
       //function runQuery(numArticles, queryURL) {
       
       // API request for info
       $.ajax({
           url: searchURL, 
           method: "GET"
       })
       .then(function(response) {
  
        // Loop through and provide the correct number of articles
   for (var i = 0; i < numArticles && i < response.articles.length; i++) {
    
        // Add to the Article Counter (to make sure we show the right number)
         // articleCounter++;
    
           
          // Confirm that the specific JSON for the article isn't missing any details
          // If the article has a headline include the headline in the HTML
              
          console.log(response);
          if (response.articles[i].title !== "null") {
            $("#info1")
              .append(
                "<h3 class='title'><span class='label label-primary'>" +
                (i + 1) + " </span><strong> " +
                response.articles[i].title + "</strong></h3>"+
                "<h4>" + response.articles[i].description + "</h4>"+
                "<a href='" + response.articles[i].url + "'>" + response.articles[i].url + "</a>"
              );
    
         
          }};
    
       })
  

  });
  ///------------------- CITY 2 -------------------------

  $("#textInput2").keyup(function(event) {
    if (event.keyCode === 13) {
      $("#btn2").click();
     // $("#textInput1").val ("");
    }
    });

  $("#btn2").on("click", function(event2) {  //Anna added function name
    var cityName = $("#textInput2").val();
   // $("#textInput2").val(""); // Anna commented out to preserve search box
  
    getWeatherInfo(cityName, function(data) {
      $("#city2a").html(data.city);  
      $("#main_weather2").html(data.main);
      $("#description_weather2").html(data.description);
      $("#weather_image2").attr("src", data.image);
      let ftemp = ((data.temp - 273.15) *1.8) + 32;
      let t = Math.floor(ftemp);
      $("#temperature2").html(`${t} &#8457;`);
      $("#pressure2").html(data.pressure);
      $("#humidity2").html(data.humidity);
      $("#rightPanelWeather").removeClass("hidden");
  
      // $(".right-panel").show();
  
      addWeatherToFirebase(cityName);
    });
    event2.preventDefault();  
    
     // Initially sets the articleCounter to 0
     articleCounter = 0;
     
       // Empties the region associated with the articles
       $("#info2").empty();
  
       
      // These variables will hold the results we get from the user's inputs via HTML
      // Grabbing text the user typed into the search input
      var searchTerm = $("#textInput2").val().trim();
      console.log ($("#textInput2"))
  
  
      // To display the name of the city
      //document.getElementById("city1").innerHTML = "searchTerm";
      //$("#city1").html$("#searchTerm");
  
      var currentDate = Date.now(); // new Date();
  
      //var searchURL = url + searchTerm;
  
       var searchURL = 'https://newsapi.org/v2/everything?' +
       'q="' +searchTerm+ '"&'+
       'from="' +currentDate+ '"&'+
       //'from=2018-01-27&' +
       'sortBy=popularity&' +
       'apiKey=0ecb5163eefb43e6b9eb82d77829f5e4';
       console.log(searchURL);
       //var req = new Request(searchURL);
       
       var newsSection = $("#info2");
       
      
       
       // This runQuery function expects two parameters:
       // (the number of articles to show and the final URL to download data from)
       //function runQuery(numArticles, queryURL) {
       
       // API request for info
       $.ajax({
           url: searchURL, 
           method: "GET"
       })
       .then(function(response) {
  
        // Loop through and provide the correct number of articles
   for (var i = 0; i < numArticles && i < response.articles.length; i++) {
    
        // Add to the Article Counter (to make sure we show the right number)
         // articleCounter++;
         
          
          // Confirm that the specific JSON for the article isn't missing any details
          // If the article has a headline include the headline in the HTML
              
          console.log(response);
          if (response.articles[i].title !== "null") {
            $("#info2")
              .append(
                "<h3 class='title'><span class='label label-primary'>" +
                (i + 1) + " </span><strong> " +
                response.articles[i].title + "</strong></h3>"+
                "<h4>" + response.articles[i].description + "</h4>"+
                "<a href='" + response.articles[i].url + "'>" + response.articles[i].url + "</a>"
              );
            }};
        })
        
      
        });
        
        