class MapaGeoJSON{
	
	
	constructor (){
		
		

    }
	
	definirFuncion(){
		this.initMap=function initMap(){
			var centro = {lat: this.a, lng: this.b};
			var mapa = new google.maps.Map(document.getElementById('map'),{zoom: 8,center:centro});
			
			var marcador = new google.maps.Marker({position:centro,map:mapa});
		}
		
	}
	
	definirMapaGeoJSON(){
		this.initMapGeoJSON=function initMapGeoJSON(archivo){
			var centro = {lat: this.a, lng: this.b};
			var mapa = new google.maps.Map(document.getElementById('map'),{zoom: 8,center:centro});
			
			var marcador = new google.maps.Marker({position:centro,map:mapa});
		
			var lector = new FileReader();
			lector.onload = function (evento) {
				var resultado= lector.result;
				var json=JSON.parse(resultado);
				
				var i;
				for (i=0;i<json.features.length;i++) { 
					var coordenadas = [
						{ lat: Number.parseFloat(json.features[i].geometry.coordinates[0].toString().split(",")[1]), 
						  lng: Number.parseFloat(json.features[i].geometry.coordinates[0].toString().split(",")[0]) },
						{ lat: Number.parseFloat(json.features[i].geometry.coordinates[1].toString().split(",")[1]), 
						  lng: Number.parseFloat(json.features[i].geometry.coordinates[1].toString().split(",")[0]) },
						{ lat: Number.parseFloat(json.features[i].geometry.coordinates[2].toString().split(",")[1]), 
						  lng: Number.parseFloat(json.features[i].geometry.coordinates[2].toString().split(",")[0]) },
						{ lat: Number.parseFloat(json.features[i].geometry.coordinates[3].toString().split(",")[1]), 
						  lng: Number.parseFloat(json.features[i].geometry.coordinates[3].toString().split(",")[0]) },
						
						

					];
					
					var ruta = new google.maps.Polyline({
						path: coordenadas,
						geodesic: true,
						strokeColor: "#FF0000",
						strokeOpacity: 1.0,
						strokeWeight: 2,
					});

					ruta.setMap(mapa);
				}
				
				

				
				
				
          
				
			}      
			lector.readAsText(archivo);
			
			

			
			

			

		}
		
	}
	
	


	
	
	
	
	
	
	leerArchivo(files){
		var archivo = files[0];
		this.initMapGeoJSON(archivo);
		
	
		
		
		
  
        
        
		
		
		
	}
	
	defineCentro(c1,c2){
		this.a=c1;
		this.b=c2;
	}

	

	
	
	
		
	
}






