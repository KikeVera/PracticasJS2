class Calculadora{
	
	
	constructor (){
        this.states=[""];
		this.calculations=[];
		this.mem;
		
		
    }
	

	escribir(x) {
		try { 
			
			document.getElementById("ans").value =document.getElementById("ans").value+x;
			this.states.push(document.getElementById("ans").value);
			
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	
	}

	 borrar() {
    
		try { 
			document.getElementById("ans").value ="";
			this.states=[""];
			this.calculations=[];
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
			this.states=[document.getElementById("ans").value];
			this.calculations.push(document.getElementById("ans").value);
		}
		catch(err) {
			document.getElementById("ans").value = "Error = " + err;
		}
	}
	
	guardarEnMemoria(){
		if(document.getElementById("ans").value!=""){
			var x;
			x=document.getElementById("ans").value;
			this.mem=eval(x);
		}
		
	}
	
	sumarNumeroMemoria(){
		if(document.getElementById("ans").value!=""){
			var x;
			x=document.getElementById("ans").value;
			this.mem=this.mem+eval(x);
		}
	}
	
	restarNumeroMemoria(){
		if(document.getElementById("ans").value!=""){
			var x;
			x=document.getElementById("ans").value;
			this.mem=this.mem-eval(x);
		}
	}
	
	borrarMemoria(){
		this.mem='';
		
	}
	
	recuperarMemoria(){
		document.getElementById("ans").value=this.mem;
	}
}

class CalculadoraCientifica extends Calculadora{
	
	constructor (){
        super();
		this.ang="deg";
		
    }
	
	back(){
		if(this.states.length>'1'){
			this.states.pop();
			document.getElementById("ans").value=this.states[this.states.length-1];
		}
		
		
	}	
	
	previusCalculation(){
		if(this.calculations.length>'1'){
			this.calculations.pop();
			document.getElementById("ans").value=this.calculations[this.calculations.length-1];
			this.states=[ocument.getElementById("ans").value];
		}
		
	}
	
	calculaResto(){
		if(document.getElementById("ans").value!=""){
		
			this.evaluar();
			this.escribir('%');
		}
		
	}
	
	calculaLogaritmo(){
		if(document.getElementById("ans").value!=""){
			this.evaluar();
			document.getElementById("ans").value =Math.log(document.getElementById("ans").value);
			this.evaluar();
		}
		
		
	}
	
	calculaPotencia10(){
		if(document.getElementById("ans").value!=""){
			this.evaluar();
			document.getElementById("ans").value =Math.pow(10,document.getElementById("ans").value);
			this.evaluar();
		}
	}
	
	calculaRaiz(){
		if(document.getElementById("ans").value!=""){
			this.evaluar();
			document.getElementById("ans").value =Math.sqrt(document.getElementById("ans").value);
			this.evaluar();
		}
	}
	
	calculaAngulo(){
		
		var x;
		x=document.getElementById("ans").value;
		if(this.ang=="deg"){
			
			x=x*'0.0174533';
			
		}
		
		return x;
		
		
	}
	
	
	
	calculaSin(){
		if(document.getElementById("ans").value!=""){
			var x;
		
			this.evaluar();
			x=this.calculaAngulo();
			document.getElementById("ans").value =Math.sin(x);
			this.evaluar();
		}	
		
	}
	
	calculaSinh(){
		if(document.getElementById("ans").value!=""){
			var x;
		
			this.evaluar();
			x=this.calculaAngulo();
			document.getElementById("ans").value =Math.sinh(x);
			this.evaluar();
		}
		
		
	}
	
	calculaCos(){
		if(document.getElementById("ans").value!=""){
			var x;
		
			this.evaluar();
			x=this.calculaAngulo();
			document.getElementById("ans").value =Math.cos(x);
			this.evaluar();
		}
		
	}
	
	calculaCosh(){
		if(document.getElementById("ans").value!=""){
			var x;
		
			this.evaluar();
			x=this.calculaAngulo();
			document.getElementById("ans").value =Math.cosh(x);
			this.evaluar();
		}
		
	}
	
	calculaTan(){
		if(document.getElementById("ans").value!=""){
			var x;
		
			this.evaluar();
			x=this.calculaAngulo();
			document.getElementById("ans").value =Math.tan(x);
			this.evaluar();
		}
		
	}
	
	calculaTanh(){
		if(document.getElementById("ans").value!=""){
			var x;
		
			this.evaluar();
			x=this.calculaAngulo();
			document.getElementById("ans").value =Math.tanh(x);
			this.evaluar();
		}
		
	}
	
	calcularCuadrado(){
		if(document.getElementById("ans").value!=""){
			this.evaluar();
			document.getElementById("ans").value =Math.pow(document.getElementById("ans").value,2);
			this.evaluar();
		}
	}
	
	calcularPEnesima(){
		if(document.getElementById("ans").value!=""){
			this.evaluar();
			this.escribir('e+');
		}
		
	}
	
	calcularFactorial(){
		if(document.getElementById("ans").value!=""){
			this.evaluar();
			var x;
			x=document.getElementById("ans").value;
			x=Math.round(x);
			var i=x;
			while(i>'1'){
				i--;
				x=x*i;
			}
		
			document.getElementById("ans").value=x;
			this.evaluar();
		}
	
		
	}
	
	cambiaSigno(){
		
	this.evaluar();	
	document.getElementById("ans").value=-document.getElementById("ans").value;
			
		
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
	
	
	
	
}