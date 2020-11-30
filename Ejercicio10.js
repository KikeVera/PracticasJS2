class Traductor{
	
	
	constructor (){
		 
		

    }
	
	escribirEsp() {
		try { 
		
			var x=document.getElementById("ansEspañol").value;
			document.getElementById("ansEspañol").value ="";
			var texto=$("#español").html()+"<li id=\"listaLocal\">-"+x+"</li>";
			$("#español").html(texto);
			this.traducirEsp(x);
			
			
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	
	}
	
	traducirEsp(x){
		
		
		this.settings.data.q=x;
		this.settings.data.source="es";
		this.settings.data.target="en";
		
		$.ajax(this.settings).done(function (response) {
			
			var texto=$("#ingles").html()+"<li id=\"listaEntrante\">-"+response.data.translations['0'].translatedText+"</li>";
			
			$("#ingles").html(texto);
			
		});
		
		
		
		
	}
	
	
	escribirEng() {
		try { 
		
			var x=document.getElementById("ansIngles").value;
			document.getElementById("ansIngles").value ="";
			var texto=$("#ingles").html()+"<li id=\"listaLocal\">-"+x+"</li>";
			$("#ingles").html(texto);
			this.traducirEng(x);
			
			
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	
	}
	
	traducirEng(x){
		
		
		this.settings.data.q=x;
		this.settings.data.source="en";
		this.settings.data.target="es";
		
		$.ajax(this.settings).done(function (response) {
			
			var texto=$("#español").html()+"<li id=\"listaEntrante\">-"+response.data.translations['0'].translatedText+"</li>";
			
			$("#español").html(texto);
			
		});
		
		
		
		
	}
	
	configuraAPI(){
		
		
		this.settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://google-translate1.p.rapidapi.com/language/translate/v2",
			"method": "POST",
			"headers": {
				"content-type": "application/x-www-form-urlencoded",
				"accept-encoding": "application/gzip",
				"x-rapidapi-key": "62ec1162b5msh330582a3b663638p163899jsn147ac89e094c",
				"x-rapidapi-host": "google-translate1.p.rapidapi.com"
			},
			"data": {
				
			}
		};
		
	}
	
	
	
	
	

	

	
	
	
		
	
}






