

function calcularInteresCompuesto(capitalInicial, interesAnual, años, meses) {
    const tiempo = años + (meses / 12);

    const capitalFinal = capitalInicial * (1 + (interesAnual / 100))**tiempo;
    

    const ganancias = capitalFinal - capitalInicial;
    
    return console.log("Tu capital final seria de: $" +
     Number.parseFloat(capitalFinal).toFixed(2) +
     " y tu ganancia seria: $" +
     Number.parseFloat(ganancias).toFixed(2));
}
