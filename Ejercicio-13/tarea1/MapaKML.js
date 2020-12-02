class MapaKML{
	
	
	constructor (){
		
		

    }
	
	definirFuncion(){
		this.initMap=function initMap(){
			var centro = {lat: this.a, lng: this.b};
			var mapa = new google.maps.Map(document.getElementById('map'),{zoom: 8,center:centro});
			
			var marcador = new google.maps.Marker({position:centro,map:mapa});
		}
		
	}
	
	definirMapaKML(){
		this.initMapKML=function initMapKML(archivo){
			var centro = {lat: this.a, lng: this.b};
			var mapa = new google.maps.Map(document.getElementById('map'),{zoom: 8,center:centro});
			
			var marcador = new google.maps.Marker({position:centro,map:mapa});
			
			var lector = new FileReader();
			lector.onload = function (evento) {
				var xmlDoc = $.parseXML(lector.result),
				$xml = $(xmlDoc),
				$options = $xml.find("coordinates");

				$.each($options, function() {
					var puntos=$(this).text().split(" ");
					var coordenadas = [
						{ lat: Number.parseFloat(puntos[0].split(",")[1]), lng: Number.parseFloat(puntos[0].split(",")[0]) },
						{ lat: Number.parseFloat(puntos[1].split(",")[1]), lng: Number.parseFloat(puntos[1].split(",")[0]) },
						{ lat: Number.parseFloat(puntos[2].split(",")[1]), lng: Number.parseFloat(puntos[2].split(",")[0]) },
						{ lat: Number.parseFloat(puntos[3].split(",")[1]), lng: Number.parseFloat(puntos[3].split(",")[0]) },
						
						

					];
					
					var ruta = new google.maps.Polyline({
						path: coordenadas,
						geodesic: true,
						strokeColor: "#FF0000",
						strokeOpacity: 1.0,
						strokeWeight: 2,
					});

					ruta.setMap(mapa);
					
					
				});
				
				
          
				
			}      
			lector.readAsText(archivo);
			
			

			
			

			

		}
		
	}
	
	


	
	
	
	
	
	
	leerArchivo(files){
		var archivo = files[0];
		this.initMapKML(archivo);
		
		
		
		
		
  
        
        
		
		
		
	}
	
	defineCentro(c1,c2){
		this.a=c1;
		this.b=c2;
	}

	

	
	
	
		
	
}






