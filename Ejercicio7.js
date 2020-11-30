class MatrixJS{
	
	
	constructor (){
       
		
		
		
    }
	
	ocultarTitulos(){
		$("h2").hide();
		$("h3").hide();
	}
	
	
	mostrarTitulos(){
		$("h2").show();
		$("h3").show();
	}
	
	ingles(){
		$("#mostrar").val("Show titles");
		$("#ocultar").val("Hide titles");
		$("#iniciot").text("Introduction");
		$("#descripciont").text("Description");
		$("#descripcion").html("<p>The Matrix is a 1999 American science fiction action film written and directed by the Wachowskis, and produced by Joel Silver. It stars Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano and is the first installment in the Matrix franchise. It depicts a dystopian future in which humanity is unknowingly trapped inside a simulated reality </p>");
		
	}
	
	español(){
		$("#mostrar").val("Mostrar titulos");
		$("#ocultar").val("Ocultar titulos");
		$("#iniciot").text("Inicio");
		$("#descripciont").text("Descripcion");
		$("#descripcion").html("<p>The Matrix (titulada Matrix en español) es una película de ciencia ficción escrita y dirigida por las hermanas Wachowski y protagonizada por Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss y Hugo Weaving. Estrenada en los Estados Unidos el 31 de marzo de 1999. Es la primera entrega de la trilogía de Matrix de la que derivan (dado su éxito) una serie de videojuegos, cortos animados y cómics. </p>");
		
	}
	
	añadirSecuelas(){
		var tituloSecuelas = "<h2 id=\'secuelas\' >Secuelas</h2>";
		$("table.banda").after(tituloSecuelas);
		
		var tituloReloaded = "<h3 id=\'reloaded\' >Matrix:Reloaded</h3>";
		$("#secuelas").after(tituloReloaded);
		
		var tituloRevolutions = "<h3 id=\'revolutions\' >Matrix:Revolutions</h3>";
		$("#reloaded").after(tituloRevolutions);
		
		var tituloMatrix4 = "<h3 id=\'matrix4\' >Matrix 4</h3>";
		$("#revolutions").after(tituloMatrix4);
		
		var pReloaded="<p id=\'reloaded\'>The Matrix Reloaded es la secuela de la película The Matrix, escrita y dirigida por las hermanas Wachowski y estrenada en los Estados Unidos por la Warner Bros el 15 de mayo de 2003, y después en otros países días después. The Matrix Reloaded recaudó $281 millones de dólares en los Estados Unidos y $738 millones en todo el mundo.</p>";
		var pRevolutions="<p id=\'revolutions\'>The Matrix Revolutions  es una película de 2003 protagonizada por Keanu Reeves, Carrie-Anne Moss y Laurence Fishburne y dirigida y escrita por las hermanas Wachowski. Es la tercera película de la trilogía Matrix, y presenta una combinación de filosofía y acción al igual que sus predecesoras, en una búsqueda por concluir con los interrogantes de The Matrix Reloaded. </p>";
		var pMatrix4="<p id=\'matrix4\'>El 20 de agosto de 2019, Warner Bros. anunció oficialmente el desarrollo de la cuarta película de Matrix. Será dirigida por Lana Wachowski e incluirá a Keanu Reeves y Carrie-Anne Moss a quienes se confirmó que volverán a repetir sus papeles. El guion será escrito por Aleksander Hemon y David Mitchell. La producción está programada para comenzar a principios de 2020.</p>";
		
		$("#reloaded").after(pReloaded);
		$("#revolutions").after(pRevolutions);
		$("#matrix4").after(pMatrix4);
		
	}
	
	eliminarSecuelas(){
		$("#secuelas").remove();
		$("#reloaded").remove();
		$("#revolutions").remove();
		$("#matrix4").remove();
		
		$("#reloaded").remove();
		$("#revolutions").remove();
		$("#matrix4").remove();
		
	}

	recorrido(){
		$("*", document.body).each(function() {
		var etiquetaPadre = $(this).parent().get(0).tagName;
		$(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
		});
		
	}
	
	sumaFilasYColumnas(){
		var rowCount = $("table.banda tr").length;
		var colCount = $("thead th").length;
		document.getElementById("ans").value ="Filas: "+rowCount+" Columnas: "+colCount;
		
	}
	

	
	
		
	
}






