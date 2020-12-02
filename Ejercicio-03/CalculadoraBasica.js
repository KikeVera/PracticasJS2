class Calculadora{
	
	constructor (){
        
    }

	escribir(x) {
		try { 
			document.getElementById("ans").value =document.getElementById("ans").value+x;
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	
	}

	 borrar() {
    
		try { 
			document.getElementById("ans").value ="";
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	
	}

	evaluar() {
		var x;
		x = document.getElementById("ans").value;
		try { 
			document.getElementById("ans").value = eval(x);
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	}
}