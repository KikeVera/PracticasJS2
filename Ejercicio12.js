class Lector{
	
	
	constructor (){
		 
		

    }
	
	
	
	leerArchivo(files){
		
		var archivo = files[0];
		var datos="<ul>";
		datos+="<li> Nombre del archivo: " + archivo.name+  "</li>";
		datos+="<li> Tamaño del archivo: " + archivo.size + " bytes</li>";
		datos+="<li> Tipo del archivo: " + archivo.type+  "</li>";
		datos+="<li> Fecha de la última modificación: " + archivo.lastModifiedDate+  "</li>";
		datos+="</ul>";
		document.getElementById("datos").innerHTML=datos;
		
		var tipoTexto = /text.*/;
		
		if (archivo.type.match(tipoTexto)) 
       {
        var lector = new FileReader();
        lector.onload = function (evento) {
          
          document.getElementById("contenido").innerHTML = "<pre>"+lector.result+"</pre>";
          }      
        lector.readAsText(archivo);
        }
    else {
         document.getElementById("contenido").innerHTML = "<pre> Error : no se puede leer el contenido del archivo </pre>";
        }       
		
	}
	
	

	

	
	
	
		
	
}






