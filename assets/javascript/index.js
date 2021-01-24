/*$(document).ready(function() {
    $("#submit").click(function() {
      $("a").prop("href", "https://www.google.com/");
      console.log("Hyperlink Changed");
    })
  });*/
let arr = $('.delete-check');
$('.delete-check').click(function(){ 
    for (let i=0 ; i<arr.length; i++){
        if($(arr[i]).is(':checked')){
            console.log(arr[i]);
        }
    }
});
    

