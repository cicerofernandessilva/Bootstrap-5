
const precio = document.getElementById("precio");
const visitas = document.getElementById("visitas");
const inputRango = document.getElementById("customRange3");
const arrayVisitas = ['10k', '50k', '100k', '500k', '1M']

inputRango.addEventListener('input', () => {
    console.log("Me diste click 😍");
    console.log(inputRango.value);
    precio.textContent = inputRango.value;
    visitas.textContent = arrayVisitas[(inputRango.value/10 - 1)]
})


