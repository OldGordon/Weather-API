$(document).ready(function(){
    

    
	var keyApi = "7df5292a4557c42f44db278fe4787b9e";
	   
    getLocation();

	function getLocation(){
        	

        function success(position){
			
			var latCoord = position.coords.latitude ;
	    	var lonCoord = position.coords.longitude;
            console.log(position);
            getWeather(latCoord,lonCoord);

            function getWeather(latCoord,lonCoord){
		    	
		    	var	apiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latCoord + '&lon=' + lonCoord  + '&APPID=' + keyApi;
		    	console.log(apiUrl);
		    	$.get(apiUrl, function (weather){

                	$('#location').prepend(weather.name + ", " + weather.sys.country);
                	$('#condition').prepend(weather.weather[0].main);

                	switch (weather.weather[0].main){
                		case "Clouds":
                			$("body").css("background","url('img/resultClouds.jpg')");
                			break;
                		case "Rain":
                			$("body").css("background","url('img/resultRain.jpg')");
                			break;
                		case "Snow":
                			$("body").css("background","url('img/resultSnow.jpg')");
                			break;
                		case "Clear":
                			$("body").css("background","url('img/resultClear.jpg')");
                			break;
                		case "Clouds":
                			$("body").css("background","url('img/resultClouds.jpg')");
                			break;

                	}	
                	

                	$('.temp:last').append('</br>' + (weather.main.temp - 273.15) + "&deg;" );
                	
                	wind.innerHTML = "Wind speed " + weather.wind.speed;
                	$('#wind').append(" meter/sec");

		    	});	

    		}
	    	
        }

  		function error(){
  			switch(error.code)
			{
				case error.PERMISSION_DENIED:
					alert('ERROR: User denied access to track physical position!');
				break;

				case error.POSITION_UNAVAILABLE:
					alert("ERROR: There is a problem getting the position of the device!");
				break;

				case error.TIMEOUT:
					alert("ERROR: The application timed out trying to get the position of the device!");
				break;

				default:
					alert("ERROR: Unable to retrieve your position!");
				break;
			}
  			
  		}	
    navigator.geolocation.getCurrentPosition(success,error);
	};
	
   
    
    //getWeather(loc.latCoord,loc.lonCoord);

});