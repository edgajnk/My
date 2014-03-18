sap.ui.controller("sap.ui.demo.myFiori.view.Maps", {  
    onInit: function () {  
        this.getView().byId("map_canvas").addStyleClass("myMap"); 
    },  
    onAfterRendering: function () {  
        if (!this.initialized) {  
            this.initialized = true;  
            this.geocoder = new google.maps.Geocoder();  
            var mapOptions = {  
                center: new google.maps.LatLng(-34.397, 150.644),  
                zoom: 10,  
                mapTypeId: google.maps.MapTypeId.ROADMAP  
            };  
            this.map = new google.maps.Map(this.getView().byId("map_canvas").getDomRef(),  
                mapOptions);  
        }  
    },  
    actSearch: function () {  
        var map = this.map;  
        var address = this.getView().byId("inpSearch").getValue();  
        this.geocoder.geocode({ 'address': address }, function (results, status) {  
        	if (status == google.maps.GeocoderStatus.OK) { 
                map.setCenter(results[0].geometry.location); 
                var marker = new google.maps.Marker({ 
                    map: map, 
                    position: results[0].geometry.location 
                });
 
                // add info window
                var contentString = 'hello world';
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });       
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map, marker);
                });                           
            } else {  
                alert('Geocode was not successful for the following reason: ' + status);  
            }  
        });  
    },
    
    showMyLocation : function(){
    	
    	var map = this.map;    
        if (navigator.geolocation) {
        		
        		navigator.geolocation.getCurrentPosition(function(position) {
        			
        			var pos = new google.maps.LatLng(position.coords.latitude,
        											 position.coords.longitude);
        			
        			var infowindow = new google.maps.InfoWindow({
        				map: map,
        				position: pos,
        				content: "Dabar as esu cia"
        				
        			});
        			
        		});
                map.setCenter(pos);
        }
        else {  
                alert('Geocode was not successful for the following reason: ' + status);  

    	
    }
}});  