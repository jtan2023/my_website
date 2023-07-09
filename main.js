$(document).ready(function() {
  // Make an AJAX request to Yahoo Finance API
  $.ajax({
    url: "https://finance.yahoo.com/quote/%5EGSPC?p=%5EGSPC",
    method: "GET",
    success: function(response) {
      // Parse the HTML response
      var html = $.parseHTML(response);
      
      // Find the element containing the index value
      var indexValue = $(html).find("span[data-reactid='32']").text();
      
      // Update the content of the data-container element
      $("#data-container").text("S&P 500 Index: " + indexValue);
    },
    error: function(error) {
      console.log("Error fetching data from Yahoo Finance:", error);
    }
  });
});
