// Helpers
function esPar(numerito){
    return (numerito % 2 === 0);
}
function cacularMediaAritmetica(lista){
    const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento);
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
// Calculadora Media
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = cacularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// Mediana General
const salariosCol = Colombia.map(
    function(personita){
        return personita.salary
    }
);
const salariosColSorted = salariosCol.sort((salaryA, salaryB) => salaryA - salaryB);


const medianaGeneralCol =  medianaSalarios(salariosColSorted);

// Mediana top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = (salariosColSorted.length - spliceStart);
const salariosCol10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);
const medianaTop10 = medianaSalarios(salariosCol10);

console.log(medianaGeneralCol, medianaTop10)