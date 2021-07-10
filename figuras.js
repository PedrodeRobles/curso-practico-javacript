// Codigo del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado mide: " + areaCuadrada + "cm^2");

console.groupEnd();


// Codigo del triangulo
console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm y " 
    + baseTriangulo 
    + "cm."
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo mide: " + areaTriangulo + "cm^2");

console.groupEnd();


// Codigo del circulo
console.group("Circulos");

// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
// Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
// Pi
const PI = Math.PI;
// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
// Area
const areaCirculo = (radioCirculo**2) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();