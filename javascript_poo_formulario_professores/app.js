// console.log("Funciona!");

const formulario = document.querySelector("#formulario");
const cardEstudiantes = document.querySelector("#cardEstudiantes");
const cardProfesores = document.querySelector("#cardProfesores");
const templateEst = document.querySelector("#templateEstudiante").content;
const templateProf = document.querySelector("#templateProfesor").content;
const alert = document.querySelector(".alert");

const estudiantes = [];
const profesores = [];

// console.log(formulario);
// console.log(cardEstudiantes);
// console.log(cardProfesores);
// console.log(templateEst);
// console.log(templateProf);

document.addEventListener("click", (e) => {
  // console.log("me clicaste!");
  // console.log(e.target.dataset);
  // console.log(e.target.dataset.nombre);
  if (e.target.dataset.uid) {
    // console.log(e.target.matches("btn-success"));
    if (e.target.matches(".btn-success")) {
      // console.log(setEstado);
      // console.log("me clicaste! btn-success");
      estudiantes.map((item) => {
        if (item.uid === e.target.dataset.uid) {
          item.setEstado = true;
          // console.log(item);
        }
        // console.log("me clicaste! btn-success", item);
        return item;
      });
    }
    if (e.target.matches(".btn-danger")) {
      // console.log("me clicaste! btn-dange");
      estudiantes.map((item) => {
        if (item.uid === e.target.dataset.uid) {
          item.setEstado = false;
          // console.log(item);
        }
        // console.log("me clicaste! btn-success", item);
        return item;
      });
    }
    Persona.pintarUI(estudiantes, "Estudiante");
  }
});

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.uid = `${Date.now()}`;
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

  get getEstudiante() {
    return this.#estudiante;
  }

  agregarNuevoEstudiante() {
    const clone = templateEst.cloneNode(true);

    clone.querySelector("h5 .text-primary").textContent = this.nombre;
    clone.querySelector("h6").textContent = this.getEstudiante;
    clone.querySelector(".lead").textContent = this.edad;
    // console.log(this.#estado);
    if (this.#estado) {
      // console.log("feito");
      // console.log(this.#estado);
      clone.querySelector(".badge").className = "badge bg-success"; // agregar classes
      clone.querySelector(".btn-success").disabled = true;
      clone.querySelector(".btn-danger").disabled = false; // destivar butones
      // clone.querySelector("span.badge").textContent = "Aprobado";
      // console.log("true");
    } else {
      // console.log("não feito");
      clone.querySelector(".badge").className = "badge bg-danger"; // agregar classes
      clone.querySelector(".btn-danger").disabled = true; // destivar butones
      clone.querySelector(".btn-success").disabled = false;
      // clone.querySelector("span.badge").textContent = "Reprobado";
      // console.log("false");
    }

    clone.querySelector(".badge").textContent = this.#estado
      ? "Aprobado"
      : "Reprobado"; // ternario para seleção de mensagem

    clone.querySelector(".btn-success").dataset.uid = this.uid;
    clone.querySelector(".btn-danger").dataset.uid = this.uid;

    // console.log(this.#estado);

    return clone;
  }
}

class Profesor extends Persona {
  #profesor = "Profesor";
  agregarNuevoProfesor() {
    const clone = templateProf.cloneNode(true);
    clone.querySelector("h5").textContent = this.nombre;
    clone.querySelector("h6").textContent = this.#profesor;
    clone.querySelector(".lead").textContent = this.edad;
    return clone;
  }
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //desativa envio por padrão do navegador
  alert.classList.add("d-none");
  const datos = new FormData(formulario);
  //   console.log(datos);
  //   console.log([...datos.values()]);
  //   datos.forEach((item) => console.log(item));
  const [nombre, edad, opcion] = [...datos.values()];
  //   console.log(nombre, edad, nota, option);
  if (!nombre.trim() || !edad.trim() || !opcion.trim()) {
    console.log("algun dato en blanco");
    alert.classList.remove("d-none");
    return;
  }
  if (opcion === "Estudiante") {
    const estudiante = new Estudiante(nombre, edad);
    // console.log(estudiante);
    estudiantes.push(estudiante);
    Persona.pintarUI(estudiantes, opcion);
  }
  if (opcion === "Profesor") {
    const profesor = new Profesor(nombre, edad);
    // console.log(profesor);
    profesores.push(profesor);
    Persona.pintarUI(profesores, opcion);
  }
});
