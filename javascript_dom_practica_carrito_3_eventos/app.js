// // console.log("funciona!");

const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const templateFooter = document.querySelector("#footerTemplate");
const footer = document.querySelector("#footer");
const btnAgregar = document.querySelectorAll(".card .btn");
const fragment = document.createDocumentFragment();

// //teste
// console.log(carrito);
// console.log(template);
// console.log(btnAgregar);
// console.log(fragment);

let carritoObj = [];

document.addEventListener("click", (e) => {
  // console.log(e.target);
  // console.log(e.target.matches(".card .btn-primary"));
  if (e.target.matches(".card .btn-outline-primary")) {
    // console.log("Ejecutar agregar al carrito");
    agrCarrito(e);
  }
  // console.log(
  //   "diminuir",
  //   e.target.matches("#carrito .list-group-item .btn-outline-danger")
  // );
  if (e.target.matches("#carrito .list-group-item .btn-outline-danger")) {
    // console.log("diminuir dentro");
    btnDiminuir(e);
  }
  // console.log(
  //   "agregar",
  //   e.target.matches("#carrito .list-group-item .btn-outline-success")
  // );

  if (e.target.matches("#carrito .list-group-item .btn-outline-success")) {
    // console.log("aumetar dentro");
    btnAumentar(e);
  }
  if (e.target.matches("#footer .btn-outline-info")) {
    console.log("finalizar compra");
    finalizar();
  }
});

const agrCarrito = (e) => {
  //   console.log(e.target);
  // console.log(e.target.dataset.fruta);
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
    precio: parseInt(e.target.dataset.precio),
  };

  const indice = carritoObj.findIndex((item) => item.id === producto.id);
  // console.log(indice);

  if (indice === -1) {
    carritoObj.push(producto);
  } else {
    carritoObj[indice].cantidad++;
    // carritoObj[indice].precio = carritoObj[indice].cantidad * producto.precio; // foi incluido no pintarCarrito
  }
  // console.log(carritoObj);

  pintarCarrito();
};

const pintarCarrito = () => {
  carrito.textContent = "";
  //   console.log("pintar carrito", producto);
  carritoObj.forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".badge").textContent = item.cantidad;
    clone.querySelector("div .lead span").textContent =
      item.precio * item.cantidad;
    clone.querySelector("div .btn-outline-danger").dataset.id = item.id;
    clone.querySelector("div .btn-outline-success").dataset.id = item.id;

    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);

  pintarFooter();
};

const pintarFooter = () => {
  // console.log("footer funciona!");
  footer.textContent = "";
  const total = carritoObj.reduce(
    (acc, current) => acc + current.cantidad * current.precio,
    0
  );
  // console.log(total);
  //clonar footer template
  const clone = templateFooter.content.cloneNode(true);
  clone.querySelector("span").textContent = total;
  if (total > 0) {
    footer.appendChild(clone);
  }
};

const btnAumentar = (e) => {
  // console.log(e);
  // console.log(e.target.dataset.id);
  // console.log("funciona!");

  carritoObj = carritoObj.map((item) => {
    // console.log(item, "funciona");
    // console.log(item.id, "funciona");
    if (item.id === e.target.dataset.id) {
      // console.log(item.id === e.target.dataset.id);
      // console.log(item.id, "funciona");
      // console.log(item.cantidad, "funciona");
      item.cantidad++;
      // console.log(item.cantidad);
    }
    console.log(item);
    return item;
  });
  console.log("carritoObj", carritoObj);
  pintarCarrito();
};

const btnDiminuir = (e) => {
  // console.log(e);
  // console.log(e.target.dataset.id);
  carritoObj = carritoObj.filter((item) => {
    console.log(item);
    if (item.id === e.target.dataset.id) {
      if (item.cantidad > 0) {
        item.cantidad--;
        if (item.cantidad === 0) {
          return;
        }
        return item;
      }
    } else {
      return item;
    }
  });
  pintarCarrito();
};

const finalizar = () => {
  alert("Obrigado por realizar sua compra!");
  document.location.reload(true);
};
