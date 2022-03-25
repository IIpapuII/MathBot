// codigo del cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuandrado(lado){
    return lado * lado;
}
console.groupEnd("");

//Codigo del triangulo
console.group("Triangulos");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;

}
function areaTriangulo(base, altura){
    return (base * altura)/2;
}
console.groupEnd("");

// codigo Circulo 
console.group("Circulo");
const radioCirculo = 4;
const pi = Math.PI;
function diametroCirculo(radio){
    return radio * 2
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
function areaCirculo(radio){
    return (radio * radio) * pi;
}
console.groupEnd("");

//Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const resultadoPerimetroCuadrado = document.getElementById("resultadoPerimetroCuadrado");
    resultadoPerimetroCuadrado.innerHTML = ("El perimetro es: ") + perimetro;
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuandrado(value);
    const resultadoAreaCuadrado = document.getElementById("resultadoAreaCuadrado");
    resultadoAreaCuadrado.innerHTML = ("El area es: ") + area;
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