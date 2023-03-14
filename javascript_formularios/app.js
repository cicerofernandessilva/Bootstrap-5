// console.log("Funciona!");

const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");
const alertSuccess = document.getElementById("alertSuccess");
// console.log(formulario);
// console.log(userEmail);
// console.log(userName);
// console.log(alertEmail);
// console.log(alertName);
// console.log(alertSuccess);
const pintarError = (errores) => {
  errores.forEach((item) => {
    item.tipo.classList.remove("d-none");
    item.tipo.textContent = item.msg;
  });
};
const pintarSuccess = () => {
  alertSuccess.classList.remove("d-none");
  //   document.location.reload(true);
  alert("O formulário foi enviado com sucesso!");
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log("funciona!");
  //   console.log(userName.value);
  //   console.log(userEmail.value);
  const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regUserEmail =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

  const errores = [];

  alertSuccess.classList.add("d-none");
  if (!regUserName.test(userName.value) || !userName.value.trim()) {
    console.log("Formato no valido!");
    userName.classList.add("is-invalid");
    errores.push({
      tipo: alertName,
      msg: "Escriba un nombre válido",
    });
  } else {
    userName.classList.remove("is-invalid");
    userName.classList.add("is-valid");
    alertName.classList.add("d-none");
  }
  if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
    console.log("Formato no valido!");
    userEmail.classList.add("is-invalid");
    errores.push({
      tipo: alertEmail,
      msg: "Escriba un email válido",
    });
  } else {
    userEmail.classList.remove("is-invalid");
    userEmail.classList.add("is-valid");
    alertEmail.classList.add("d-none");
  }
  if (errores.length !== 0) {
    pintarError(errores);
    return;
  }

  //   console.log("Formulário enviado!");
  pintarSuccess();
});

//formData

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("funciona");

//   const inputs = new FormData(formulario);
//   console.log(inputs.get("userName"));
//   console.log(inputs.get("userEmail"));

//   for (let campo of inputs.values()) {
//     console.log(campo);
//   }

//   for (let campo of inputs.entries()) {
//     console.log(campo);
//   }
// });
