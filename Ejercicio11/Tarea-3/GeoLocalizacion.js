class GeoL{
	
	
  constructor (){
	
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this),this.verErrores.bind(this));
		
		
		
		
    }
	
	
	
	
    getPosicion(posicion){
		this.mensaje = "Se ha realizado correctamente la peticiÃ³n de geolocalización";
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    }
   
    mostrar(){
        
        var datos='<ul>'; 
		datos+='<li>'+this.mensaje +'</li>'; 
        datos+='<li>Longitud: '+this.longitud +' grados</li>'; 
        datos+='<li>Latitud: '+this.latitud +' grados</li>';
        datos+='<li>Precisión de la latitud y longitud: '+ this.precision +' metros</li>';
        datos+='<li>Altitud: '+ this.altitud +' metros</li>';
        datos+='<li>Precisión de la altitud: '+ this.precisionAltitud +' metros</li>'; 
        datos+='<li>Rumbo: '+ this.rumbo +' grados</li>'; 
        datos+='<li>Velocidad: '+ this.velocidad +' metros/segundo</li>';
		datos+='</ul>';
		document.getElementById("dat").innerHTML = datos;
        
    }
	
	verErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite la peticion de geolocalización"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Información de geolocalización no disponible"
            break;
        case error.TIMEOUT:
            this.mensaje = "La petición de geolocalización ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido"
            break;
        }
    }
	
	mostrarMapa(){
        
        
        var apiKey = "&key=AIzaSyAoAdfDnwfjlipFtRhfrTS8M0UFdt8UxHY";
       
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        
        var centro = "center=" + this.latitud + "," + this.longitud;
        
        var zoom ="&zoom=15";
       
        var tamaño= "&size=800x600";
        var tipo="&maptype=terrain";
        var marcador = "&markers=color:blue%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        
        var sensor = "&sensor=false"; 
        
        this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor +tipo+ apiKey;
       document.getElementById("mapa").innerHTML = "<img src='"+this.imagenMapa+"'/>";
    }
	
	
	


	
	
		
	
}






