// Optimizando el proyecto final

let carritoIcono = document.querySelector("#carrito")
let carrito = document.querySelector(".mi-carrito")
let cerrarCarrito = document.querySelector(".cerrar-carrito")
let precioTotal = document.getElementById("precioTotal")
let contadorCarrito = document.getElementById("contadorCarrito")
let botonComprar = document.getElementById("btnComprar")

/* Cuando tocamos el boton de "Comprar", se resetea el carrito */
const compraProcesada = () => {
    alert("¡Su orden fue procesada!")
    /* Spread del Carrito */
    console.log(...carro)
    carro.length = 0
    actualizarCarrito()
}

botonComprar.addEventListener("click",compraProcesada)

carritoIcono.onclick = () => {
    carrito.classList.add("abrir-carrito")
}

cerrarCarrito.onclick = () => {
    carrito.classList.remove("abrir-carrito")
}

let carro = []

document.addEventListener("DOMContentLoaded"), () => {
    if (localStorage.getItem("carro")) {
        carro = JSON.parse(localStorage.getItem("carro"))
        actualizarCarrito()
    }
}


const contenedorProductos = document.getElementById("galeria")

productos.forEach((producto) => {
    const div = document.createElement("div")
    div.classList.add("caja-carrito")
    div.innerHTML = `
    <img src="${img}"  alt="imagen producto" class="imagen-producto">
    <h2 class="titulo">${nombre}</h2>
    <p class="precio">$${precio}</p>
    <button class="agregar-carrito" id="agregar${id}">Agregar al Carrito</button>
</div>`
    contenedorProductos.appendChild(div)

    let boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id)
    })
})

// Agrego producto al carrito depende de su ID

const agregarAlCarrito = (prodId) => {
    const existe = carro.some(prod => prod.id === prodId)
    if (existe) {
        const prod = carro.map(prod => {
             /* Operador Lógico AND */
             prod.id === prodId && prod.cantidad++
            })
        }
    
    else {
        const item = productos.find((prod) => prod.id === prodId)
        carro.push(item)
        console.log(carro)
    }

// elimina el producto
const eliminarDelCarrito = (prodId) => {
    const item = carro.find((prod) => prod.id === prodId)
    const index = carro.indexOf(item)
    carro[index].cantidad = 0
    //Elimino el producto del array
    carro.splice(index, 1)
    actualizarCarrito()
}

// Contenedor donde van a ir los items
const contenedorCarrito = document.getElementById("carritoContenido")

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carro.forEach((prod) => {
        const div = document.createElement("div")
        div.className = ("caja-carrito")
        let { img, nombre, precio, cantidad, id } = prod
        div.innerHTML = `
        <img src="${img}" alt="producto1" class="carrito-imagen">
        <div class="detalles">
        <div class="titulo-producto">${nombre}</div>
        <div id="precioCarrito" class="precio-carrito">${precio}</div>
        <input readonly = "readonly" id="cantidadCarrito" type="number" value="${cantidad}" class="cantidad-carrito">
    </div>
    <img class="remover-carrito" onclick = "eliminarDelCarrito(${id})"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJ9JREFUSEvt1csRwjAMRdGTSigB6IQSSAeUQCdQAp0AHZBKYFjwCzFyMgmbREuP5l3p2ZYKA0cxsL4cwBq7RCEl9r+KjAALHIMulzilcuqAa0+WPXX/DuipgZdM6g66WvWlNw7Ao8u6bU3nnSyaAI1P/93vyaIRWNRmAGZ/tAtmbZRxxn1BfURq2K2wxTwTUmGDQy4gUzdOi3ZyrBBk3AB+wyoZJl1mqQAAAABJRU5ErkJggg==" />
        `
        contenedorCarrito.appendChild(div)
        //Guardo el prodcuto en local Stroage
        localStorage.setItem("carro", JSON.stringify(carro))
    })
    
    contadorCarrito.innerText = carro.length
    // Junto todos los precios
    precioTotal.innerText = carro.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
}
}