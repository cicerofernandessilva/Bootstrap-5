// console.log("Funciona!");

const formulario = document.querySelector("#formulario");
const cardEstudiantes = document.querySelector("#cardEstudiantes");
const cardProfesores = document.querySelector("#cardProfesores");
const templateEst = document.querySelector("#templateEstudiante").content;
const templateProf = document.querySelector("#templateProfesor").content;

const estudiantes = [];
const profesores = [];

// console.log(formulario);
// console.log(cardEstudiantes);
// console.log(cardProfesores);
// console.log(templateEst);
// console.log(templateProf);

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  static pintarUI(personas, tipo) {
    if (tipo === "Estudiante") {
      cardEstudiantes.textContent = "";
      const fragment = document.createDocumentFragment();
      personas.forEach((item) => {
        fragment.appendChild(item.agregarNuevoEstudiante());
      });
      cardEstudiantes.appendChild(fragment);
    }
    if (tipo === "Profesor") {
      cardProfesores.textContent = "";
      const fragment = document.createDocumentFragment();
      personas.forEach((item) => {
        fragment.appendChild(item.agregarNuevoProfesor());
      });
      cardProfesores.appendChild(fragment);
    }
  }
}

class Estudiante extends Persona {
  #estado = false;
  #estudiante = "Estudiante";
  set setEstado(estado) {
    this.#estado = estado;
  }

  get getEsudiante() {
    return this.#estudiante;
  }

  agregarNuevoEstudiante() {
    const clone = templateEst.cloneNode(true);
    clone.querySelector("h5 .text-primary").textContent = this.nombre;
    return clone;
  }
}

class Profesor extends Persona {
  #profesor = "Profesor";
  agregarNuevoProfesor() {
    const clone = templateProf.cloneNode(true);
    clone.querySelector("h5").textContent = this.nombre;
    return clone;
  }
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //desativa envio por padrão do navegador
  const datos = new FormData(formulario);
  //   console.log(datos);
  //   console.log([...datos.values()]);
  //   datos.forEach((item) => console.log(item));
  const [nombre, edad, opcion] = [...datos.values()];
  //   console.log(nombre, edad, nota, option);
  if (opcion === "Estudiante") {
    const estudiante = new Estudiante(nombre, edad);
    console.log(estudiante);
    estudiantes.push(estudiante);
    Persona.pintarUI(estudiantes, opcion);
  }
  if (opcion === "Profesor") {
    const profesor = new Profesor(nombre, edad);
    profesores.push(profesor);
    Persona.pintarUI(profesores, opcion);
  }
});
