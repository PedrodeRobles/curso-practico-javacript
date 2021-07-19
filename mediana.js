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

//HTML
function resultado() {
    const input1 = document.getElementById("Input1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("Input2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("Input3");
    const value3 = Number(input3.value);

    const input4 = document.getElementById("Input4");
    const value4 = Number(input4.value);

    const listaUsuario = [value1, value2, value3, value4,];

    const calculo = calcularMediana(listaUsuario);

    const result = document.getElementById("Result");
    result.innerText = "La mediana es: " + calculo;
}



