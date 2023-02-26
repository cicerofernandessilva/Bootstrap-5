console.log("Funciona! 😍");

//objetos literais

const parafro = document.getElementById("texto");
const parafro2 = document.getElementById("texto2");
const parafro3 = document.getElementById("texto3");

const gato = {
  nombre: "pepeu",
  manso: true,
  duerme: true,
  enimigos: ["agua", "perro", "veterinario"],
  color: "blanco",
  edad: 10,
};
// console.log(gato);
// console.log(gato.nombre);
// console.log(gato.enimigos[0]);

parafro.innerHTML = `O nombre de mi gatito si llama ${gato.nombre}, ele é ${gato.color} e tiene ${gato.edad} de edad`;

// grud

// crear, leer, actualizar y eliminar

//leer
console.log(gato);
// actualizar
gato.edad = 5;
gato.nombre = "Romeu";

parafro2.innerHTML = `O nombre de mi gatito si llama ${gato.nombre}, ele é ${gato.color} e tiene ${gato.edad} de edad`;

//eliminar

delete gato.manso;
// console.log("eliminado 'manso'");

// console.log(gato);

//hasOwnProperty - verifica "certa" se existe propriedade no objeto

// if (gato.hasOwnProperty("manso")) {
//   gato.manso = false;
//   console.log(gato);
// } else {
//   gato.manso = true;
//   console.log("Acrescentado 'manso '", gato);
// }

//objetos anidados

const gato2 = {
  nombre: "Mario",
  manso: true,
  duerme: true,
  enimigos: ["agua", "perro", "veterinario"],
  color: "preto",
  edad: 10,
  otros: {
    amigos: ["vermelho", "valiente"],
    comida: {
      favorita: "salmon",
      caliente: "polo",
    },
  },
  // uso de metodos de objetos
  comer: function () {
    console.log("El gato esta comiendo pez");
  },
  comer2(alimento) {
    console.log(`
${this.nombre} esta comiendo ${alimento}
        `);
  },
  listEnimigos() {
    this.enimigos.forEach((item) => console.log("Lista de enimigos : ", item));
  },
};

// //forEach no objeto
gato2.listEnimigos();

parafro3.innerHTML = `O nombre de mi gatito si llama ${gato2.nombre}, ele é ${gato2.color} e tiene ${gato2.edad} de edad`;

// console.log(gato2);
// console.log(gato2.nombre);
// console.log(gato2.enimigos[0]);
// console.log("amigos ", gato2.otros.amigos[0]);
// console.log(gato2.otros.comida.favorita);

//uso de métodos do objeto

// gato2.comer();
// gato2.comer2("pez");

// //for in

// for (let propriedad in gato2) {
//   console.log("Propriedades do loop ", propriedad),
//     console.log("Propriedades do gato (objeto) ", gato2[propriedad]);
// }

//objeto.values()

// console.log(Object.values(gato2), "objectos.value");
// Object.values(gato2).forEach((item) => console.log(item));
