/*global $*/
$("#button").click(function(){
var time = $("#year").val();
var name= $("#title").val();

$.ajax({
url:"https://www.omdbapi.com/?t="+name+"&y=" + time + "&apikey=b976566f",

method:"GET",
success: function(response){
console.log(response);

}
});
});
