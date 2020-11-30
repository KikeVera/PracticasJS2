class TiempoJS{ 
	
	
	constructor (){
		this.codigoPais="ES"
		this.unidades = "&units=metric";
		this.idioma = "&lang=es";
		this.apikey="420f7478cd524a6600c748a1158f4cea";
		this.urlProaza="http://api.openweathermap.org/data/2.5/weather?q=" + "Proaza" + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.urlLaPlaza="http://api.openweathermap.org/data/2.5/weather?q=" + "La Plaza" + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
		this.urlBarzana="http://api.openweathermap.org/data/2.5/weather?q=" + "Bárzana" + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
		
		
    }
	
	cargarDatosProaza(){
		
		$.ajax({
            dataType: "json",
            url: this.urlProaza,
            method: 'GET',
            success: function(datos){
				
                    var stringDatos= "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/wn/"+datos.weather['0'].icon+"@2x.png\">";
                    stringDatos+= "<ul><li>Ciudad: " + datos.name + "</li>";
					stringDatos += "<li>País: " + datos.sys.country + "</li>";
                    stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                    stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
					stringDatos += "<li>Tiempo: " + datos.weather['0'].main + "</li>";
					stringDatos += "<li>Descripccion: " + datos.weather['0'].description + "</li>";
                    stringDatos += "<li>Temperatura: " + datos.main.temp + " º</li>";
                    stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " º</li>";
                    stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " ºº</li>";
                    stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                    stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                    stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *'1000').toLocaleDateString() + "</li>";
                    stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                     stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                    
                    $("#proaza").html(stringDatos);
            },
            error:function(){
				$("#proaza").html(" No se puede obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
			}
               
        });
		
		
	}
	
	cargarDatosLaPlaza(){
		
		$.ajax({
            dataType: "json",
            url: this.urlLaPlaza,
            method: 'GET',
            success: function(datos){
				
                    var stringDatos= "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/wn/"+datos.weather['0'].icon+"@2x.png\">";
                    stringDatos+= "<ul><li>Ciudad: " + datos.name + "</li>";
					stringDatos += "<li>País: " + datos.sys.country + "</li>";
                    stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                    stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
					stringDatos += "<li>Tiempo: " + datos.weather['0'].main + "</li>";
					stringDatos += "<li>Descripccion: " + datos.weather['0'].description + "</li>";
                    stringDatos += "<li>Temperatura: " + datos.main.temp + " º</li>";
                    stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " º</li>";
                    stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " ºº</li>";
                    stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                    stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                    stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *'1000').toLocaleDateString() + "</li>";
                    stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                     stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                    
                    $("#laPlaza").html(stringDatos);
            },
            error:function(){
				$("#laPlaza").html(" No se puede obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
			}
               
        });
		
		
	}
	
	cargarDatosBarzana(){
		
		$.ajax({
            dataType: "json",
            url: this.urlBarzana,
            method: 'GET',
            success: function(datos){
				
                    var stringDatos= "<img alt=\"Icono tiempo\" src=\" http://openweathermap.org/img/wn/"+datos.weather['0'].icon+"@2x.png\">";
                    stringDatos+= "<ul><li>Ciudad: " + datos.name + "</li>";
					stringDatos += "<li>País: " + datos.sys.country + "</li>";
                    stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                    stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
					stringDatos += "<li>Tiempo: " + datos.weather['0'].main + "</li>";
					stringDatos += "<li>Descripccion: " + datos.weather['0'].description + "</li>";
                    stringDatos += "<li>Temperatura: " + datos.main.temp + " º</li>";
                    stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " º</li>";
                    stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " º</li>";
                    stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                    stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                    stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                    stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                    stringDatos += "<li>Hora de la medida: " + new Date(datos.dt *'1000').toLocaleTimeString() + "</li>";
                    stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt *'1000').toLocaleDateString() + "</li>";
                    stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                     stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
                    
                    $("#barzana").html(stringDatos);
            },
            error:function(){
				$("#barzana").html(" No se puede obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
			}
               
        });
		
		
	}
	
	
		
	
}






