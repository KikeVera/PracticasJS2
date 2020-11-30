class TiempoJS{
	
	
	constructor (){
		this.codigoPais="ES"
		this.unidades = "&units=metric";
		this.tipo="&mode=xml";
		this.idioma = "&lang=es";
		this.apikey="420f7478cd524a6600c748a1158f4cea";
		
		
        
		
		
    }
	
	
	cargarDatos(){
		this.cargarDatosCiudad("Proaza","proaza");
		this.cargarDatosCiudad("La Plaza","laPlaza");
		this.cargarDatosCiudad("Bárzana","barzana");
		this.cargarDatosCiudad("Grado","grado");
		this.cargarDatosCiudad("Tuñón","tuñon");
		
	}
	
	cargarDatosCiudad(ciudad,id){
		
		$.ajax({
            dataType: "xml",
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey,
            method: 'GET',
            success: function(datos){
					var icon=$('weather',datos).attr("icon");
					var ciudad= $('city',datos).attr("name");
					var pais = $('country',datos).text()
					var longitud = $('coord',datos).attr("lon");
                    var latitud = $('coord',datos).attr("lat");
					var descripcion=$('weather',datos).attr("value");
					var temperatura =$('temperature',datos).attr("value");
					var temperaturaMin = $('temperature',datos).attr("min");
                    var temperaturaMax = $('temperature',datos).attr("max");
					var temperaturaUnit = $('temperature',datos).attr("unit");
					var presion  = $('pressure',datos).attr("value");
					var presionUnit = $('pressure',datos).attr("unit");
					var humedad  = $('humidity',datos).attr("value");
                    var humedadUnit = $('humidity',datos).attr("unit");
					var amanecer = $('sun',datos).attr("rise");
                    var minutosZonaHoraria = new Date().getTimezoneOffset();
                    var amanecerMiliSeg1970  = Date.parse(amanecer);
                        amanecerMiliSeg1970 -= minutosZonaHoraria * '60' * '1000';
                    var amanecerLocal = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
                    var oscurecer = $('sun',datos).attr("set");          
                    var oscurecerMiliSeg1970 = Date.parse(oscurecer);
                        oscurecerMiliSeg1970 -= minutosZonaHoraria * '60' * '1000';
                    var oscurecerLocal = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
					var direccionViento = $('direction',datos).attr("value");
					var velocidadViento = $('speed',datos).attr("value");
					var horaMedida  = $('lastupdate',datos).attr("value");
                    var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                        horaMedidaMiliSeg1970 -= minutosZonaHoraria * '60' * '1000';
                    var horaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                    var fechaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
					var visibilidad = $('visibility',datos).attr("value");
					var nubosidad = $('clouds',datos).attr("value");
					
					
				
                    var stringDatos= "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/wn/"+icon+"@2x.png\">";
                    stringDatos+= "<ul><li>Ciudad: " + ciudad + "</li>";
					stringDatos += "<li>País: " + pais + "</li>";
                    stringDatos += "<li>Latitud: " + latitud + " grados</li>";
                    stringDatos += "<li>Longitud: " + longitud + " grados</li>";
					stringDatos += "<li>Descripcion: " + descripcion + "</li>";
                    stringDatos += "<li>Temperatura: " + temperatura + " º</li>";
                    stringDatos += "<li>Temperatura máxima: " + temperaturaMax + " " +temperaturaUnit +"</li>";
                    stringDatos += "<li>Temperatura mínima: " + temperaturaMin + " "+temperaturaUnit+"</li>";
                    stringDatos += "<li>Presión: " + presion + " " +presionUnit+"</li>";
                    stringDatos += "<li>Humedad: " + humedad + " "+humedadUnit +"</li>";
                    stringDatos += "<li>Amanece a las: " + amanecerLocal + "</li>";
                    stringDatos += "<li>Oscurece a las: " + oscurecerLocal + "</li>";
                    stringDatos += "<li>Dirección del viento: " + direccionViento + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + velocidadViento + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + horaMedidaLocal + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + fechaMedidaLocal + "</li>";
                    stringDatos += "<li>Visibilidad: " + visibilidad + " metros</li>";
                     stringDatos += "<li>Nubosidad: " + nubosidad + " %</li></ul>";
                    
                    $("#"+id).html(stringDatos);
            },
            error:function(){
				$("#"+id).html(" No se puede obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
			}
               
        });
		
		
	}
	
	
	
	
		
	
}






