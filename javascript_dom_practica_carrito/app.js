// console.log("funciona!");

const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const btnAgregar = document.querySelectorAll(".card .btn");
const fragment = document.createDocumentFragment();

// //teste
// console.log(carrito);
// console.log(template);
// console.log(btnAgregar);
// console.log(fragment);

const carritoObj = {};

const agrCarrito = (e) => {
  //   console.log(e.target);
  console.log(e.target.dataset.fruta);
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };
  if (carritoObj.hasOwnProperty(producto.id)) {
    producto.cantidad = carritoObj[producto.titulo].cantidad + 1;
  }
  carritoObj[producto.titulo] = producto;
  //   console.log("carrito object", carritoObj);
  pintarCarrito(producto);
};

const pintarCarrito = (producto) => {
  carrito.textContent = "";
  //   console.log("pintar carrito", producto);
  Object.values(carritoObj).forEach((item) => {
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;
    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
};
btnAgregar.forEach((btn) => btn.addEventListener("click", agrCarrito));
