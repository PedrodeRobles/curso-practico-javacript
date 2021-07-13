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