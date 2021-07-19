const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];


function calcularModa(lista) {
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
    
    const listaArray = Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    
    const moda = listaArray[listaArray.length - 1];

    return moda;

}

//HTML
function calcularInputs() {
    const input1 = document.getElementById("Input1")
    const value1 = input1.value;

    const input2 = document.getElementById("Input2")
    const value2 = input2.value;

    const input3 = document.getElementById("Input3")
    const value3 = input3.value;

    const input4 = document.getElementById("Input4")
    const value4 = input4.value;

    const input5 = document.getElementById("Input5")
    const value5 = input5.value;

    const input6 = document.getElementById("Input6")
    const value6 = input6.value;

    const input7 = document.getElementById("Input7")
    const value7 = input7.value;

    const listaUsuario = [value1, value2, value3, value4, value5, value6, value7];

    const resultado = calcularModa(listaUsuario);

    const result = document.getElementById("Result");
    result.innerText = "La moda es: " + resultado[0] + " se repite " + resultado[1] + " veces";
}