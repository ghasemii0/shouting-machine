$(document).ready(function(){
  $("#name").submit(function(event){
    var userInput = $("input#name1").val().toUpperCase();

    $(".text").text(userInput);
    $(result).show();
    event.preventDefault();
  });

});
