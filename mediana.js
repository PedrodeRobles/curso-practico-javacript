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

function calcularMediana(lista) {  // lista [1, 2 ,3]
    const mitadLista = parseInt(lista.length / 2); //mitadLista = 2

    function esPar(numerito) {
        if (numerito % 2 === 0){
            return true;
        } else {    // 3 / 2 = 1.5 osea false
            return false;
        }
    }

    let mediana;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElemento1y2;
    } else {
       mediana = lista[mitadLista];
    }

    return mediana;
}

