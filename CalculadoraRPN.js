class CalculadoraRPN{
	
	
	constructor (){
       
		this.pila=[];
		this.ang="deg";
		
		
		
    }
	

	escribir(x) {
		try { 
			
			document.getElementById("ans").value =document.getElementById("ans").value+x;
			
			
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	
	}

	enter(){
		
		var x;
		x= document.getElementById("ans").value;
		if(x!=""){
			this.push(x);
			document.getElementById("ans").value="";
		}
		
		this.escribePila();
	}
	 
	 borrar(){
		 document.getElementById("ans").value="";
		 this.pila=[];
		 this.escribePila();
		 
	 }
	 
	cambiaSigno(){
		
	
		document.getElementById("ans").value=-document.getElementById("ans").value;
			
		
	}
	
	back(){
		this.pila.pop();
		this.escribePila();
	}
	
	sumar(){
		if(this.pila.length>=2){
			var x=this.pila.pop();
			var y=this.pila.pop();
		
			this.pila.push(Number.parseFloat(y)+Number.parseFloat(x));
			this.escribePila();
		}
		
	}
	
	restar(){
		if(this.pila.length>=2){
			var x=this.pila.pop();
			var y=this.pila.pop();
		
			this.pila.push(Number.parseFloat(y)-Number.parseFloat(x));
			this.escribePila();
		}
	}
	
	multiplicar(){
		if(this.pila.length>=2){
			var x=this.pila.pop();
			var y=this.pila.pop();
		
			this.pila.push(Number.parseFloat(y)*Number.parseFloat(x));
			this.escribePila();
		}
		
	}
	
	dividir(){
		if(this.pila.length>=2){
			var x=this.pila.pop();
			var y=this.pila.pop();
		
			this.pila.push(Number.parseFloat(y)/Number.parseFloat(x));
			this.escribePila();
		}
		
	}
	
	calcularFactorial(){
		
		if(this.pila.length>=1){
			var x;
			x=this.pila.pop();
			x=Math.round(x);
			var i=x;
			while(i>'1'){
				i--;
				x=x*i;
			}
		
			this.pila.push(x);
			this.escribePila();
			
		}
	
		
	}
	
	calculaLogaritmo(){
		if(this.pila.length>=1){
			var x=this.pila.pop();
			x=Math.log(x);
			this.pila.push(x);
			this.escribePila();
			
		}
		
		
	}
	
	calculaPotencia10(){
		
		if(this.pila.length>=1){
			var x=this.pila.pop();
			x=Math.pow(10,x);
			this.pila.push(x);
			this.escribePila();
			
		}
		
	}
	
	calculaRaiz(){
		if(this.pila.length>=1){
			var x=this.pila.pop();
			x=Math.sqrt(x);
			this.pila.push(x);
			this.escribePila();
			
		}
	}
	
	calcularCuadrado(){
		if(this.pila.length>=1){
			var x=this.pila.pop();
			x=Math.pow(x,2);
			this.pila.push(x);
			this.escribePila();
			
		}
	}
	
	calcularPEnesima(){
		if(this.pila.length>=2){
			var x=this.pila.pop();
			var y=this.pila.pop();
		
			this.pila.push(Math.pow(y,x));
			this.escribePila();
		}
		
	}
	
	calculaAngulo(){
		
		var x;
		x=this.pila.pop();
		if(this.ang=="deg"){
			
			x=x*'0.0174533';
			
		}
		
		return x;
		
		
	}
	
	calculaSin(){
		if(this.pila.length>=1){
			var x=this.calculaAngulo();
			x=Math.sin(x);
			this.pila.push(x);
			this.escribePila();
			
		}
		
	}
	
	calculaSinh(){
		if(this.pila.length>=1){
			var x=this.calculaAngulo();
			x=Math.sinh(x);
			this.pila.push(x);
			this.escribePila();
			
		}
		
		
	}
	
	calculaCos(){
		if(this.pila.length>=1){
			var x=this.calculaAngulo();
			x=Math.cos(x);
			this.pila.push(x);
			this.escribePila();
			
		}
		
	}
	
	calculaCosh(){
		if(this.pila.length>=1){
			var x=this.calculaAngulo();
			x=Math.cosh(x);
			this.pila.push(x);
			this.escribePila();
			
		}
		
	}
	
	calculaTan(){
		if(this.pila.length>=1){
			var x=this.calculaAngulo();
			x=Math.tan(x);
			this.pila.push(x);
			this.escribePila();
			
		}
		
	}
	
	calculaTanh(){
		if(this.pila.length>=1){
			var x=this.calculaAngulo();
			x=Math.tanh(x);
			this.pila.push(x);
			this.escribePila();
			
		}
		
	}
	
	cambiaUdsAngulo(){
		if(this.ang=="deg"){
			this.ang="rad";
			document.getElementById("angs").value="RAD";
		}
		
		else{
			this.ang="deg";
			document.getElementById("angs").value="DEG";
		}
	
	}
	
	cambiaTrigonometria(){
		if(document.getElementById("sin").value=="sin"){
			document.getElementById("sin").value="sinh";
			document.getElementById("sin").setAttribute("onclick","calculadora.calculaSinh()");
		}
		
		else{
			document.getElementById("sin").value="sin";
			document.getElementById("sin").setAttribute("onclick","calculadora.calculaSin()");
		}
		
		if(document.getElementById("cos").value=="cos"){
			document.getElementById("cos").value="cosh";
			document.getElementById("cos").setAttribute("onclick","calculadora.calculaCosh()");
		}
		
		else{
			document.getElementById("cos").value="cos";
			document.getElementById("cos").setAttribute("onclick","calculadora.calculaCos()");
		}
		
		if(document.getElementById("tan").value=="tan"){
			document.getElementById("tan").value="tanh";
			document.getElementById("tan").setAttribute("onclick","calculadora.calculaTanh()");
		}
		
		else{
			document.getElementById("tan").value="tan";
			document.getElementById("tan").setAttribute("onclick","calculadora.calculaTan()");
		}
	}

	
	
	push(valor){
		this.pila.push(valor);
		
	}
	
	pop(){
		var valor=pila.pop();
		return valor;
	}
	
	
	escribePila(){
		var i;
		i=this.pila.length;
		var representacion;
		representacion="<ul>";
		
		while(i>'0'){
		
		representacion=representacion+"<li>Pila["+i+"] = "+this.pila[this.pila.length-i]+"</li>";
		i--;
		}
		representacion=representacion+"</ul>";
		document.getElementById("pila").innerHTML=representacion;
	}
}






