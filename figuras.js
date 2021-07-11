// Codigo del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrada(lado) {
    return lado * lado
}

console.groupEnd();



console.group("Triangulos");


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}


console.groupEnd();


// Codigo del circulo
console.group("Circulos");

// Radio

function diametroCirculo(radio) {
    return radio * 2;
}

// Pi
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return (radio**2) * PI;
}


console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrada(value);
    alert(area);
}


// Para el Triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputBase");

    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputBase2");
    const input2 = document.getElementById("InputAltura");

    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    const area = areaTriangulo(value1, value2);
    alert(area);
}

//Para el circulo
function calcularDiametroCirculo() {
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputRadio");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}