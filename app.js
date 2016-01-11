$(document).ready(function(){

	var keyApi = "7df5292a4557c42f44db278fe4787b9e";
	getLocation();

	function getLocation(){
		if (navigator.geolocation) {

  			navigator.geolocation.getCurrentPosition( function(position) {
    			$("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);

            });

        }else{
        	$.get('http://ipinfo.io', function (location){
        		console.log(location);
        	})
        }
	};



});