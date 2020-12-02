class CalculadoraFechas{
	
	
	constructor (){
       
		this.calendario= new Map();
		this.añadeFestivos();
		
		
		
    }
	
	añadeFestivos(){
		this.calendario.set(new Date('2020','1','1'),"Año Nuevo");
		this.calendario.set(new Date('2020','1','6'),"Reyes");
		this.calendario.set(new Date('2020','4','9'),"Jueves Santo");
		this.calendario.set(new Date('2020','4','10'),"Viernes Santo");
		this.calendario.set(new Date('2020','5','1'),"Fiesta del Trabajo");
		this.calendario.set(new Date('2020','8','15'),"Asunción de la Virgen");
		this.calendario.set(new Date('2020','9','8'),"Día de Asturias");
		this.calendario.set(new Date('2020','10','10'),"Fiesta de la Hispanidad");
		this.calendario.set(new Date('2020','11','2'),"Dia de todos los Santos (Traslado al Lunes)");
		this.calendario.set(new Date('2020','11','7'),"Día de la Constitución");
		this.calendario.set(new Date('2020','12','8'),"Inmaculada Concepción");
		this.calendario.set(new Date('2020','12','25'),"Navidad");
		
		this.calendario.set(new Date('2019','1','1'),"Año Nuevo");
		this.calendario.set(new Date('2019','1','7'),"Reyes (Traslado al Lunes)");
		this.calendario.set(new Date('2019','4','18'),"Jueves Santo");
		this.calendario.set(new Date('2019','4','19'),"Viernes Santo");
		this.calendario.set(new Date('2019','5','1'),"Fiesta del Trabajo");
		this.calendario.set(new Date('2019','8','15'),"Asunción de la Virgen");
		this.calendario.set(new Date('2019','9','9'),"Día de Asturias (Traslado al Lunes)");
		this.calendario.set(new Date('2019','10','12'),"Fiesta de la Hispanidad");
		this.calendario.set(new Date('2019','11','1'),"Dia de todos los Santos");
		this.calendario.set(new Date('2019','12','6'),"Día de la Constitución");
		this.calendario.set(new Date('2019','12','9'),"Inmaculada Concepción");
		this.calendario.set(new Date('2019','12','25'),"Navidad");
		
		this.calendario.set(new Date('2018','1','1'),"Año Nuevo");
		this.calendario.set(new Date('2018','1','6'),"Reyes ");
		this.calendario.set(new Date('2018','3','29'),"Jueves Santo");
		this.calendario.set(new Date('2018','3','30'),"Viernes Santo");
		this.calendario.set(new Date('2018','5','1'),"Fiesta del Trabajo");
		this.calendario.set(new Date('2018','8','15'),"Asunción de la Virgen");
		this.calendario.set(new Date('2018','9','8'),"Día de Asturias ");
		this.calendario.set(new Date('2018','10','12'),"Fiesta de la Hispanidad");
		this.calendario.set(new Date('2018','11','1'),"Dia de todos los Santos");
		this.calendario.set(new Date('2018','12','6'),"Día de la Constitución");
		this.calendario.set(new Date('2018','12','8'),"Inmaculada Concepción");
		this.calendario.set(new Date('2018','12','25'),"Navidad");
		
		this.calendario.set(new Date('2017','1','2'),"Año Nuevo (Traslado al Lunes)");
		this.calendario.set(new Date('2017','1','6'),"Reyes ");
		this.calendario.set(new Date('2017','4','13'),"Jueves Santo");
		this.calendario.set(new Date('2017','4','14'),"Viernes Santo");
		this.calendario.set(new Date('2017','5','1'),"Fiesta del Trabajo");
		this.calendario.set(new Date('2017','8','15'),"Asunción de la Virgen");
		this.calendario.set(new Date('2017','9','8'),"Día de Asturias ");
		this.calendario.set(new Date('2017','10','12'),"Fiesta de la Hispanidad");
		this.calendario.set(new Date('2017','11','1'),"Dia de todos los Santos");
		this.calendario.set(new Date('2017','12','6'),"Día de la Constitución");
		this.calendario.set(new Date('2017','12','8'),"Inmaculada Concepción");
		this.calendario.set(new Date('2017','12','25'),"Navidad");
		
		this.calendario.set(new Date('2016','1','1'),"Año Nuevo ");
		this.calendario.set(new Date('2016','1','6'),"Reyes ");
		this.calendario.set(new Date('2016','3','24'),"Jueves Santo");
		this.calendario.set(new Date('2016','3','25'),"Viernes Santo");
		this.calendario.set(new Date('2016','5','2'),"Fiesta del Trabajo (Traslado al Lunes)");
		this.calendario.set(new Date('2016','8','15'),"Asunción de la Virgen");
		this.calendario.set(new Date('2016','9','8'),"Día de Asturias ");
		this.calendario.set(new Date('2016','10','12'),"Fiesta de la Hispanidad");
		this.calendario.set(new Date('2016','11','1'),"Dia de todos los Santos");
		this.calendario.set(new Date('2016','12','6'),"Día de la Constitución");
		this.calendario.set(new Date('2016','12','8'),"Inmaculada Concepción");
		this.calendario.set(new Date('2016','12','26'),"Navidad (Traslado al Lunes)");
		
		this.calendario.set(new Date('2015','1','1'),"Año Nuevo ");
		this.calendario.set(new Date('2015','1','6'),"Reyes ");
		this.calendario.set(new Date('2015','4','2'),"Jueves Santo");
		this.calendario.set(new Date('2015','4','3'),"Viernes Santo");
		this.calendario.set(new Date('2015','5','1'),"Fiesta del Trabajo ");
		this.calendario.set(new Date('2015','8','15'),"Asunción de la Virgen");
		this.calendario.set(new Date('2015','9','8'),"Día de Asturias ");
		this.calendario.set(new Date('2015','10','12'),"Fiesta de la Hispanidad");
		this.calendario.set(new Date('2015','11','2'),"Dia de todos los Santos (Traslado al Lunes)");
		this.calendario.set(new Date('2015','12','7'),"Día de la Constitución (Traslado al Lunes)");
		this.calendario.set(new Date('2015','12','8'),"Inmaculada Concepción");
		this.calendario.set(new Date('2015','12','25'),"Navidad ");
		
		
		
		
	}
	
	getFestivos(){
		var start=new Date(Number.parseInt(document.getElementById("year1").value),Number.parseInt(document.getElementById("month1").value)-'1',Number.parseInt(document.getElementById("day1").value));
		var end=new Date(Number.parseInt(document.getElementById("year2").value),Number.parseInt(document.getElementById("month2").value)-'1',Number.parseInt(document.getElementById("day2").value));
		
		
		var representacion;
		representacion="<ul>";
		
		
		var loop= new Date(start);
		while(loop <= end){
			for (var [clave, valor] of this.calendario) {
				
				if(clave.getTime()==loop.getTime()){
					representacion=representacion+"<li>"+clave.toLocaleDateString("es-ES")+" : "+valor+"</li>";
				}
				
			
			
			}
			
			var newDate = loop.setDate(loop.getDate() + 1);
			loop = new Date(newDate);
			
		}
		
		
		representacion=representacion+"</ul>";
		document.getElementById("pila").innerHTML=representacion;

		
		
	}
	
	restaDias(){
		var start=new Date(Number.parseInt(document.getElementById("year1").value),Number.parseInt(document.getElementById("month1").value)-'1',Number.parseInt(document.getElementById("day1").value));
		var end=new Date(Number.parseInt(document.getElementById("year2").value),Number.parseInt(document.getElementById("month2").value)-'1',Number.parseInt(document.getElementById("day2").value));
		var x='0';
		var loop= new Date(start);
		while(loop <= end){
			x=Number.parseInt(x)+1
			
			var newDate = loop.setDate(loop.getDate() + 1);
			loop = new Date(newDate);
			
		}
			
			
			
		var representacion="<p>"+x+"</p>";
		document.getElementById("pila").innerHTML=representacion;
		
	}
	

	
	
		
	
}






