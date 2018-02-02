// When go is clciked then this function is called 
// Global Variable url 
var id = 'ac2440143679fe6cabdec3a7c05d19336e6985f38a5808992db62cac654e7a7b';
    url = 'https://api.unsplash.com/photos/random/?client_id='+id+'&per_page=30&page=1&query='
function search_city1(){
    // Getting the value of text Input field from the user 
    city1 = $("#textInput1").val();
    // If the input field is not blank
    if(city1 != ""){
         $.ajax({
            // Searching the url according to the city
            url: url + city1,
            dataType: 'json',
            success: function(json) {
                // Finding the image src
                var src = json.urls.regular;
                // Searching by id that place where to insert image
                var img = document.getElementById("giph1");
                // Inserting the image 
                img.innerHTML = "<img src = '" + src + "' class = 'image_city'>"; 
            },
            error: function(){
                // If the city is not found
                alert(url+city1);
            }
        });
    }
    // If the input field is empty
    else
        alert("Please fill the city name");
    return false;
}
function search_city2(){
    // Getting the value of text Input field from the user 
    city2 = $("#textInput2").val();
    // If the input field is not blank
    console.log(city2);
    if(city2 != ""){
         $.ajax({
            // Searching the url according to the city
            url: url + city2,
            dataType: 'json',
            success: function(json) {
                // Finding the image src
                var src = json.urls.regular;
                // Searching by id that place where to insert image
                var img = document.getElementById("giph2");
                img.innerHTML = "<img src = '" + src + "' class = 'image_city'>"; 
            },
            error: function(){
                alert("No City Found. Kindly Enter Again");
            }
        });
    }
    else
        alert("Please fill the city name");
    return false;
}


