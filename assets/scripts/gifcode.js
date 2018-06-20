$(document).ready(function() {
$(".btn-secondary").on("click", function(){
  //prevents default input
  event.preventDefault();
  //variable of the form
  var animeInput = $("#animeform").val().trim();
  console.log(animeInput)
  //button jquery
  var animeButton = $("<button>");

  //Gives class btn-primary for other btn-primary listener and data-title value
  animeButton.attr("class", "btn-primary")
  animeButton.attr("data-title", animeInput);
  animeButton.attr("style", "margin: 5px");
  
  animeButton.append(animeInput);

  $("#button-print").append(animeButton);


})

//event listener for btn-primary class
$("#button-print").on("click", ".btn-primary", function() {
  event.preventDefault();
  //code to generate gifs on the webpage
  var animeTitle = $(this).attr("data-title");

  //queryURL with API key
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animeTitle + 
  "&limit=10&offset=0&rating=G&lang=en&api_key=AJOub3mgZOkizoUySCJfxu6OcdeD0hxQ&"

  //ajax call with results printed to the html
  $.ajax({
      url: queryURL,
      method: "GET"
      }).then(function(response) {
        console.log(response);

        var results = response.data;

        //loop for results
        for (var i = 0; i < results.length; i++) {
          //creates a new div
          var titleDiv = $("<div>");
          //img tag
          var animeImg = $("<img>");
      
          animeImg.attr("src", results[i].images.fixed_height.url);
          animeImg.attr("class", "col-sm");
          // giving the image tag
          
          titleDiv.append(animeImg);
          //prepend the gifs on the page
          $("#gif-print").prepend(titleDiv);
          
          
        };
        //resets the titleDiv and animeImg variables

        
    
    });
});
});