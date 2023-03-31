// console.log("funciona!");

const parafro = document.getElementById("p");

// funcion constructora = plantilla = class

// function Persona(nombre) {
//   this.nombre = nombre;

//   this.saludar = function () {
//     return `${this.nombre} dice hola!`;
//   };
// }
// //provar
// // console.log(Persona);

// //criear personas

// const juanito = new Persona("Juanito");
// const cicero = new Persona("Cicero");
// const ignacio = new Persona("Ignacio");

// // provar
// // console.log(Persona);
// console.log(juanito);
// console.log(cicero);
// console.log(ignacio);

// // provar metodos

// console.log(juanito.saludar());
// console.log(cicero.saludar());
// console.log(ignacio.saludar());

// // prototipos

// Persona.prototype.saludarIngles = function () {
//   return `${this.nombre} says hi!`;
// };

// const pedrito = new Persona("Pedrito");

// // provar que não foi herdado o saludarIngles
// console.log(Persona);
// console.log(juanito);
// console.log(cicero);
// console.log(ignacio);
// console.log(pedrito);

// // usar o metodos do prototipo

// console.log(pedrito.saludarIngles());

// crear con uso de "Class"

// class Persona {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }

//   saludar() {
//     return `${this.nombre} dice helo!`;
//   }
// }

// const cicero = new Persona("Cícero");
// a diferença entre o construtor e a class é que todos os métodos na classe são prototipos, podem ser acessados, mas não são compartilhados

// utilizar parametros get e set

// class Persona {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }

//   get getNombre() {
//     return this.nombre;
//   }

//   set setNombre(nombre) {
//     this.nombre = nombre;
//   }

//   saludar() {
//     return `${this.nombre} dice helo!`;
//   }
// }

// const cicero = new Persona("Cícero");
// //get retorna o parametro e o set modifica, eles não são funciões e não precisa utilizar o () ao final
// cicero.setNombre = "Pedro";

// console.log(cicero.getNombre);

// parafro.textContent =
//   `Metodo saludar es ` +
//   cicero.saludar() +
//   ` Nueva persona creada es ${cicero.getNombre} `;

//static metodo da class, pode ser chamado pela class diretamente

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  get getNombre() {
    return this.nombre;
  }

  set setNombre(nombre) {
    this.nombre = nombre;
  }

  static probarSaludar(nombre) {
    return ` ${nombre} probando saludo!`;
  }

  saludar() {
    return `${this.nombre} dice helo!`;
  }
}

const cicero = new Persona("Cícero");

// console.log(Persona.probarSaludar("Chico"));

// polimorfismo ou heredar

class Estudante extends Persona {
  saludar() {
    return `${this.nombre} dice helo, bienvenido!`;
  }
}

const ignacio = new Estudante("Ignacio");

// herda elementos do pai e sobre escreve os iguais
console.log(ignacio.getNombre);
console.log(ignacio.saludar());

parafro.textContent = ` ${ignacio.getNombre}`;
