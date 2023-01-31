const shopping = document.getElementById("shopping");

const verCarrito = document.getElementById("verCarrito");

const modalContent = document.getElementById("modalContent");

const cantidadProductos = document.getElementById("cantidad-productos");

const pedido = document.querySelector(".ordenar");

let btnPaypalPay = document.getElementById("paypal-button-container");


let ordenar;
let total;
let totalOrden;
let carritoProducts;
let restar;
let sumar;
let precio;
let selectedOption = 0;
let selectedPrice;

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
  let container = document.createElement("div");
  let opciones = document.createElement("div");
  container.className = "container";
  container.innerHTML = `
  <img src="${product.img}">
  <h3>${product.nombre}</h3>
  <p>${product.descripcion}</p>
  <br>
  
  `;
  
  shopping.append(container);
  container.append(opciones);
  
  
  if (product.precio.length > 1) { 
    
    precio = product.precio[selectedOption];
    const select = document.createElement("select");
    select.name = "product.precio";
    
    product.precio.forEach((precio, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.innerText = `${product.nombre} $${precio}`;
      select.append(option);
    });
    
    select.addEventListener('change', () => {
      selectedOption = select.selectedOptions[0].value;
      selectedPrice = product.precio[selectedOption];
      p.innerHTML = `$${product.precio[selectedOption]}`;
    });
    container.append(select);
  };
  
  
  const p = document.createElement("p");
  p.className = "productoprecio";
  if (product.precio.length === 1) {
    p.innerText = `$${product.precio[0]}`;
  }; 
  container.append(p);
  
  
  ordenar = document.createElement("button");
  ordenar.innerText = "Agregar al carrito";
  ordenar.className = "ordenar";
  container.append(ordenar);
  
  ordenar.addEventListener("click", () => {
    const repeat = carrito.find(
      (repeatProduct) => repeatProduct.id === product.id && repeatProduct.option === selectedOption
    );
    
    if (repeat) {
      carrito.map((product) => {
        if (product.id === product.id && product.option === selectedOption) {
          product.cantidad++;
        } else if (prod.id === product.id && prod.option !== selectedOption) {
          carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            cantidad: 1,
            option: selectedOption,
            precio: product.precio[selectedOption],
          });
        }
      });
          } else {
      carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        cantidad: 1,
        option: selectedOption,
        precio: product.precio[selectedOption],
      });
    };
    carritoCounter();
    memoria();
});
});
const pintarCarrito = () => {
  modalContent.innerHTML = "";
  modalContent.style.display = "block";
  const modalHead = document.createElement("div");
  modalHead.className = "modal-head";
  modalHead.innerHTML = `
  <h1 class="modal-carrito">Orden</h1>`;
  modalContent.append(modalHead);
  const modalButton = document.createElement("h1");
  modalButton.innerText = "X";
  modalButton.className = "modalButton";

  modalButton.addEventListener("click", () => {
    modalContent.style.display = "none";
  });
  modalHead.append(modalButton);

  if (pintarCarrito) {
    btnPaypalPay.style.display = "block";
  }

  if (cantidadProductos) {
    modalHead.style.display = "block";
    
  }
  
  carrito.forEach((product) => {
    let carritoProducts = document.createElement("div");
    carritoProducts.className = "modal-content";
    carritoProducts.innerHTML = `
    <img src="${product.img}"> 
    <h3> ${product.nombre}</h3>
    <p> $${product.precio}</p>                   
    <span class="restar"> - </span>
    <p>${product.cantidad}</p>
    <span class="sumar"> + </span>
    <p> Tax: ${"11.5%"}</p>
    <span class="quitar">🗑️</span>`;
    
                      
    modalHead.append(carritoProducts);

    restar = carritoProducts.querySelector(".restar");
    restar.addEventListener("click", () => {
      if (product.cantidad !== 1) {
        product.cantidad--;
      }
      carritoCounter();
      pintarCarrito();
      memoria();
    });

    sumar = carritoProducts.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      product.cantidad++;
      pintarCarrito();
      carritoCounter();
      memoria();
    });

    let quitar = carritoProducts.querySelector(".quitar");
    quitar.addEventListener("click", () => {
      quitarProductos(product.id);
      quitar.className = "quitar";
    });
  });

  
  
  total = carrito.reduce((acc, p) => 
                  acc + p.cantidad * p.precio * 0.115 + p.precio * p.cantidad, 0);

  totalOrden = document.createElement("div");
  totalOrden.className = "total-orden";
  totalOrden.innerHTML = `Total a pagar: $${Math.round(total * 100) / 100}`;
  modalHead.append(totalOrden);
  modalHead.append(btnPaypalPay);
};

verCarrito.addEventListener("click", pintarCarrito);

const quitarProductos = (id) => {
  const foundId = carrito.find((element) => element.id === id);

  console.log(foundId);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });
  carritoCounter();
  memoria();
  pintarCarrito();
};

const carritoCounter = () => {
  cantidadProductos.style.display = "block";

  const carritoLenght = carrito.length;
  cantidadProductos.innerText = carrito.length;

  localStorage.setItem("carritoLenght", JSON.stringify(carritoLenght));

  cantidadProductos.innerText = JSON.parse(
    localStorage.getItem("carritoLenght")
  );
};
carritoCounter();

//Creando un almacenamiento local
const memoria = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

/*
              window.oncontextmenu = function () {
               return false;
           };
           
           document.addEventListener("keydown", function(event){
               var key = event.key || event.keyCode;
           
               if (key == 123) {
                   return false;
               } else if ((event.ctrlKey && event.shiftKey && key == 73) || (event.ctrlKey && event.shiftKey && key == 74)) {
                   return false;
               }
           }, false);
              */
