// codigo del cuadrado

function calcularPerimetroCuadrado(){
    const lado = parseInt(document.getElementById("inputCuadrado").value);
    const perimetroCuadrado = lado * 4;
    const result = document.getElementById("resultadoPerimetroCuadrado");
    result.innerHTML = ("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");
}
function calcularAreaCuadrado(){
    const lado = parseInt(document.getElementById("inputCuadrado").value);
    const areaCuandrado = lado * lado;
    const result = document.getElementById("resultadoAreaCuadrado");
    result.innerHTML = (`El area del cuadrado es: ${areaCuandrado} cm`);
}
function areaCuandrado(lado){
    return lado * lado;
}


//Codigo del triangulo
//perimetro del triagulo

function perimetroTriangulo(){
    const lado1Triangulo = parseInt(document.getElementById("inputTriangulo1").value) ;
    const lado2Triangulo = parseInt(document.getElementById("inputTriangulo2").value);
    const base = parseInt(document.getElementById("inputBase").value);
    const perimetroTriangulo = lado1Triangulo + lado2Triangulo + base;
    const result = document.getElementById("resultadoTrianguloPerimetro");
    result.innerText = ("El perimetro del triangulo es: " + perimetroTriangulo);
}

function areaTriangulo(){
    const altura = parseInt(document.getElementById("inputAltura").value);
    const base = parseInt(document.getElementById("inputBase").value);
    const areaTriangulo = (base * altura)/2;
    const result = document.getElementById("resultadoTrianguloArea");
    result.innerHTML = ("El area del triangulos es: " + areaTriangulo);
}


// codigo Circulo 
const pi = Math.PI;
function diametroCirculo(){
    const radio = parseInt(document.getElementById("inputCirculo").value);
    const diametroCirculo = radio * 2;
    const result = document.getElementById("resultadoDiametroCirculo");
    result.innerHTML = `El diametro del circulo es: ${diametroCirculo}`;
}
function perimetroCirculo(){
    const radio = parseInt(document.getElementById("inputCirculo").value);
    const diametro = radio * 2;
    const perimetroCirculo = diametro * pi;
    const result = document.getElementById("resultadoPerimetroCiculo");
    result.innerHTML = `El perimetro del circulo es: ${perimetroCirculo}`;
}
function areaCirculo(){
    const radio = parseInt(document.getElementById("inputCirculo").value);
    const areaCirculo = (radio * radio) * pi;
    const result = document.getElementById("resultadoAreaCirculo");
    result.innerHTML = `El area del circulo es: ${areaCirculo}`;
}



// Triangulo

function alturaTrianguloIsósceles(){
    const ladoA = document.getElementById("inputTrianguloLadoA");
    const ladoB = document.getElementById("inputTrianguloLadoB");
    const base = ladoA.value / 2;
    const altura = Math.sqrt((ladoB.value * ladoB.value) - (base * base));
    const alturafinal = document.getElementById("altura");
    alturafinal.innerHTML = ("La altura es: ") + altura;
}