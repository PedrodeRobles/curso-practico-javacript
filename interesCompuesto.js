
function calcularInteresCompuesto(capitalInicial, interesAnual, años, meses) {
    const tiempo = años + (meses / 12);

    const capitalFinal = capitalInicial * (1 + (interesAnual / 100))**tiempo;
    
    return capitalFinal;
}

//HTML
function calcularInputs() {
    const input1 = document.getElementById("Input1");
    const value1 = input1.value;

    const input2 = document.getElementById("Input2");
    const value2 = input2.value;

    const input3 = document.getElementById("Input3");
    const value3 = input3.value;

    const input4 = document.getElementById("Input4");
    const value4 = input4.value;

    const resultado = calcularInteresCompuesto(value1, value2, value3, value4);
    const ganancias = resultado - value1;

    const result = document.getElementById("Result");
    result.innerText = 
    "Su capital final seria: $" +
    Number.parseFloat(resultado).toFixed(2) +
     " y sus ganancias " +
     Number.parseFloat(ganancias).toFixed(2);
}
