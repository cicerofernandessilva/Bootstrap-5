console.log("funcionando!")

const formulario = document.querySelector("#formulario")
const btnEnviar = document.querySelector("#btnEnviar")
const btnCargando = document.querySelector("#btnCargando")
const chackCampo = document.querySelector("#chackCampo")
const toast = document.querySelector(".toast")

formulario.addEventListener("submit", e => {
    // alert("Me deste click");
    e.preventDefault();
    const dados = new FormData(formulario);
    console.log("Campo Email ", dados.get("campoEmail"));
    console.log("Campo Password ", dados.get("campoPassword"));
    console.log("Campo Checkbox ", dados.get("chackCampo"));
    btnEnviar.classList.add("d-none");
    btnCargando.classList.remove("d-none");

    window.setTimeout(() => {
        btnEnviar.classList.remove("d-none");
        btnCargando.classList.add("d-none");

        const eventToast = new bootstrap.Toast(toast);

        eventToast.show();

    }, 3000);

    formulario.reset();
    
})

