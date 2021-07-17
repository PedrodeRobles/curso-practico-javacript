// const lista1 = [
//     100,
//     200,
//     500,
//     400000000,
// ];


function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    );

    const promedio = sumaLista / lista.length;

    return promedio;
}

function calcularMediana(lista) {  // lista [2, 30, 10 ,21]    
    const listaOrdenada = lista.sort(
        function(numeroAnterior, numeroSiguiente) {
            return numeroAnterior - numeroSiguiente;   // [30,10,21]
        } 
        );

    const mitadLista = parseInt(listaOrdenada.length / 2); //mitadLista = 2

    function esPar(numElementosLista) {
        if (numElementosLista % 2 === 0){
            return true;
        } else {    // 3 / 2 = 1.5 osea false
            return false;
        }
    }

    let mediana;

    if (esPar(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElemento1y2;
    } else {
       mediana = listaOrdenada[mitadLista];
    }

    return mediana;
}



