const list = []
const listValues = document.getElementById("list-values");


// Helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
    }

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
    }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }
// calculadora mediana 
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}
// Mediana General
    const salariosCol = colombia.map(
        function (personita) {
            return personita.salary;
        });
    
        const salariosColSorted = salariosCol.sort(
        function (salaryA, salaryB) {
            return salaryA - salaryB;
        }
        );
        const medianaGeneralCol = medianaSalarios(salariosColSorted);

    function renderMedianaSalarial(){
        const medianaList = document.getElementById("medianaList");
        medianaList.innerHTML = medianaGeneralCol;
        console.log("hola");
    }



//   // Mediana del top 10%
//     const spliceStart = (salariosColSorted.length * 90) / 100;
//     const spliceCount = salariosColSorted.length - spliceStart;
  
//   const salariosColTop10 = salariosColSorted.splice(
//     spliceStart,
//     spliceCount,
//   );
  
//   const medianaTop10Col = medianaSalarios(salariosColTop10);
  
//   console.log({
//     medianaGeneralCol,
//     medianaTop10Col,
//   });





function addListNumber() {
    // Añadir un dato al array list
    const addValue = document.getElementById("addValue");
    const NumberValue = parseInt(addValue.value);
    list.push(NumberValue);
    addValue.value = "";

    // Mostrar los elementos del array en pantallas
    listValues.innerHTML = list;
}
function removeListNumber() {
    const removeValue = document.getElementById("removeValue");
    list.splice(removeValue.value, 1);
    listValues.innerHTML = list;
    removeValue.value = "";
}
function renderMedianaSalarial(){

}