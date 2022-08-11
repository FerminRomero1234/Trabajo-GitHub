// Segunda entrega Proyecto Final
let carritoIcono = document.querySelector("#carrito")
let carrito = document.querySelector(".mi-carrito")
let cerrarCarrito = document.querySelector(".cerrar-carrito")
let precioTotal = document.getElementById("precioTotal")
let contadorCarrito = document.getElementById("contadorCarrito")
let botonComprar = document.getElementById("btnComprar")


const compraProcesada = ()=>{
    alert("¡Su orden fue procesada!")
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
    <div class="producto" id="producto">
    <img src="${producto.img}"  alt="imagen producto" class="imagen-producto">
    <h2 class="titulo">${producto.nombre}</h2>
    <p class="precio">$${producto.precio}</p>
    <button class="agregar-carrito" id="agregar${producto.id}">Agregar al Carrito</button>
</div>`
    contenedorProductos.appendChild(div)

    let boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id)
    })
})

const agregarAlCarrito = (prodId) => {
    const existe = carro.some(prod => prod.id === prodId)
    if (existe) {
        const prod = carro.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    }
    else {
        const item = productos.find((prod) => prod.id === prodId)
        carro.push(item)
        console.log(carro)
    }
}

const eliminarDelCarrito = (prodId) => {
    const item = carro.find((prod) => prod.id === prodId)
    const index = carro.indexOf(item)
    carro.splice(index, 1)
    actualizarCarrito()
}

const contenedorCarrito = document.getElementById("carritoContenido")

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carro.forEach((prod) => {
        const div = document.createElement("div")
        div.className = ("caja-carrito")
        div.innerHTML = `
        <img src="${prod.img}" alt="producto1" class="carrito-imagen">
        <div class="detalles">
            <div class="titulo-producto">${prod.nombre}</div>
            <div id="precioCarrito" class="precio-carrito">${prod.precio}</div>
            <input readonly = "readonly" id="cantidadCarrito" type="number" value="${prod.cantidad}" class="cantidad-carrito">
        </div>
        <img class="remover-carrito" onclick = "eliminarDelCarrito(${prod.id})"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJ9JREFUSEvt1csRwjAMRdGTSigB6IQSSAeUQCdQAp0AHZBKYFjwCzFyMgmbREuP5l3p2ZYKA0cxsL4cwBq7RCEl9r+KjAALHIMulzilcuqAa0+WPXX/DuipgZdM6g66WvWlNw7Ao8u6bU3nnSyaAI1P/93vyaIRWNRmAGZ/tAtmbZRxxn1BfURq2K2wxTwTUmGDQy4gUzdOi3ZyrBBk3AB+wyoZJl1mqQAAAABJRU5ErkJggg==" />
        `
        contenedorCarrito.appendChild(div)
        localStorage.setItem("carro", JSON.stringify(carro))
    })
    contadorCarrito.innerText = carro.length
    precioTotal.innerText = carro.reduce((acc, prod) => acc + prod.precio, 0)
}