const notes = [
    {
        course: "Educacion Fisica",
        note: 10,
        credit: 2,
    },
    {
        course: "Programacion",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    }
]; 

var materia1 = Object.values(notes[0]);
var nota1 = materia1[1];
var credito1 = materia1[2];

var materia2 = Object.values(notes[1]);
var nota2 = materia2[1];
var credito2 = materia2[2];

var materia3 = Object.values(notes[2]);
var nota3 = materia3[1];
var credito3 = materia3[2];


const promedioPonderado = ((nota1 * credito1) + (nota2 * credito2) + (nota3 * credito3)) / (credito1 + credito2 + credito3) 

// Solucion de la clase 

const notesWithCredit = notes.map(function (notesObject) {
    return notesObject.note * notesObject.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum=0, newVal) {
        return sum + newVal;
    }
);

const credits = notes.map (function (notesObject) {
    return notesObject.credit;
}); 

const sumOfCredits = credits.reduce(
    function (sum=0, newVal) {
        return sum + newVal;
    }
);

const pp = sumOfNotesWithCredit / sumOfCredits;

