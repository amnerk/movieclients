$("#button").click(function(){
var time = $("#year").val();

$.ajax({
url:"http://img.omdbapi.com/?y=" + time + "&apikey=b976566f&",
method:"GET",
success: function(response){

}
});
});
