const lista = [];

function addListNumber(){
    const value = document.getElementById("addValue");
    const numberValue = parseInt(value.value);
    lista.push(numberValue);
    const list = document.getElementById("list-values");
    list.innerHTML = lista;
    value.value = "";
}
function deleteList(){
  lista.length = 0;
  const list = document.getElementById("list-values");
  list.innerHTML = lista;
}
function removeListNumber(){
  const numberPosition = document.getElementById("removeValue");
  lista.splice(numberPosition.value ,1);
  const list = document.getElementById("list-values");
  list.innerHTML = lista;
  numberPosition.value = "";
}

// Promedio
function calcularMediaAritmetica() {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    console.log(sumaLista);
    const promedioLista = sumaLista / lista.length;
    const resultado = document.getElementById("ResultadoPromedio");
    resultado.innerHTML = `El promedio de tu lista de numeros es: ${promedioLista}`; 
    return promedioLista;
  }

  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  // Mediana 

  function calcularPromedio(datos) {
    const sumaLista = datos.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    console.log(sumaLista);
    const promedioLista = sumaLista / datos.length;
    return promedioLista;
  }


  function calcularMediana(){
    const mitadLista = parseInt(lista.length / 2) ;
    let mediana;
    if (esPar(lista.length)) {
      const elemento1 = lista[mitadLista - 1];
      const elemento2 = lista[mitadLista];
      const promedioElemento1y2 = calcularPromedio([
        elemento1,
        elemento2,
      ]);
      mediana = promedioElemento1y2;
    } else {
      mediana = lista[mitadLista];
    }
    console.log(mediana);
    const result = document.getElementById("ResultadoMediana");
    result.innerHTML = `la mediana de tu lista de numeros es: ${mediana}`;
    return mediana
  }

  // Moda

  function calcularModa(){
    const listaCount = {};

    lista.map(
      function (elemento) {
        if (listaCount[elemento]) {
          listaCount[elemento] += 1;
        } else {
          listaCount[elemento] = 1;
        }
      }
    );
    
    const lista1Array = Object.entries(listaCount).sort(
      function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
      }
    );
    
    const moda = lista1Array[lista1Array.length - 1];
    const result = document.getElementById("ResultadoModa");
    result.innerHTML = `la moda de tu lista de numeros es: ${moda[0]}`;
    console.log(moda);
  } 
  




