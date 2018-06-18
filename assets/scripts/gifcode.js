//event listener
$("button").on("click", function(){
//code to generate gifs on the webpage
  var animeTitle = $(this).attr("data-title");
  //var limit = $("#images-number").val().trim();
  //queryURL with API key
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animeTitle + 
  "&limit=10&offset=0&rating=G&lang=en&api_key=AJOub3mgZOkizoUySCJfxu6OcdeD0hxQ&"

  //ajax call with results printed to the html
  $.ajax({
      url: queryURL,
      method: "GET"
      }).then(function(response) {
        console.log(response);

        var result = response.data;

        //loop for results
        for (var i = 0; i < result.length; i++) {
          //creates a new div
          var resultDiv = $("<div");
          //img tag
          var gifImg = $("<img>");
      
          gifImg.attr("src", result[i].images.fixed_height.url);
          // giving the image tag
          resultDiv.append(p);
          resultDiv.append(gifImg);
          //prepend the gifs on the page
          $("#gif-print").prepend(resultDiv);
    }
  });
});