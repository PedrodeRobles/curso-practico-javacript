// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ];

function calcularMediaAritmetica(Lista) { //calcularMediaAritmetica([1, 14 ,151, 98])
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // } 

    const sumaLista = Lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    );

    const promedio = sumaLista / Lista.length;

    return promedio;
}


// HTML
function resultado() {
    const input1 = document.getElementById("Input1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("Input2");
    const value2 = Number(input2.value);

    const input3 = document.getElementById("Input3");
    const value3 = Number(input3.value);

    const listaUsuario = [value1, value2, value3,];

    const resultado = calcularMediaAritmetica(listaUsuario);
    
    const result = document.getElementById("Result");
    result.innerText = "El promedio es: " + Number.parseFloat(resultado).toFixed(2);;
}