// console.log("funciona!");

const parafro = document.getElementById("p");

// funcion constructora = plantilla = class

function Persona(nombre) {
  this.nombre = nombre;

  this.saludar = function () {
    return `${this.nombre} dice hola!`;
  };
}
//provar
// console.log(Persona);

//criear personas

const juanito = new Persona("Juanito");
const cicero = new Persona("Cicero");
const ignacio = new Persona("Ignacio");

// provar
// console.log(Persona);
console.log(juanito);
console.log(cicero);
console.log(ignacio);

// provar metodos

console.log(juanito.saludar());
console.log(cicero.saludar());
console.log(ignacio.saludar());

// prototipos

Persona.prototype.saludarIngles = function () {
  return `${this.nombre} says hi!`;
};

const pedrito = new Persona("Pedrito");

// provar que não foi herdado o saludarIngles
console.log(Persona);
console.log(juanito);
console.log(cicero);
console.log(ignacio);
console.log(pedrito);

// usar o metodos do prototipo

console.log(pedrito.saludarIngles());

parafro.textContent = pedrito.saludarIngles();
