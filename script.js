/*global $*/
$("#button").click(function(){

$("#result").empty();
var time = $("#year").val();
var name= $("#title").val();
var length= $("#type").val();



$.ajax({
url:"https://www.omdbapi.com/?t="+name+"&y=" + time + "plot="+ length +"&apikey=b976566f",

method:"GET",
success: function(response){
$("#result").append("<p> Title:"+response.Title +"<br>"+ "Release Year:"+ response.Year+"</p>");
$(".inputs").val();
}
});
});
$("#add").click(function(){
   var addMovie=$("#result").text();
   $("#list").append(addMovie+"<br>");
   
   
});
