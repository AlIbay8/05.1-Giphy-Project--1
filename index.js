// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
$(".mailto").hide();

$("#search-button").click(function(){
  $(".mailto").hide();
  var searchTerm = $("#search-term").val();
  console.log(searchTerm)
  var requestUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY`;
  console.log(requestUrl)
  fetch(requestUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var index = Math.floor(Math.random()*20);
      console.log(index);
      console.log(data.data[index].url);
      $(".gallery").html(`<img src='${data.data[index].images.original.url}' class="gif">`);
      $(".mailto").show();
    })
});

$(".email").click(function() {
  var email = $(".email-input").val();
  console.log(email, $(".gif").attr("src"));
  $(".send").attr("href", `mailto:${email}?subject=Look at this gif from Giphy!&body=${$(".gif").attr("src")}`)
})