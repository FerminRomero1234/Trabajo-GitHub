//Interactuar con HTML

// Busco la propiedad del display
let carritoLista = document.getElementById("carritoLista").style.display = "none"

const productos = [
    { id: 1, prenda: "Remera Boca", precio: 150 },
    { id: 2, prenda: "Remera River", precio: 150 },
    { id: 3, prenda: "Campera Seleccion Argentina", precio: 250 },
    { id: 4, prenda: "Campera Boca", precio: 250 },
    { id: 5, prenda: "Campera River", precio: 250 },

];

/* Hago un array */
const carrito = [];

let producto = parseInt(prompt("Elige un producto para agregar al carrito: \n 1. Remera Boca \n 2. Remera River \n 3.Campera Seleccion Argentina \n 4. Campera Boca \n 5. Campera River"))

let total = 0;

while (producto == NaN || producto > 5 ||producto <= 0) {
    alert("No existe un producto para ese valor. Vuelva a intentar.")
    producto = parseInt(prompt("Elige un producto para agregar al carrito: \n 1. Remera Boca \n 2. Remera River \n 3.Campera Seleccion Argentina \n 4. Campera Boca \n 5. Campera River"))
}



switch (producto) {
case 1:
    console.log("Has seleccionado  " + producto + "Remera River")
    total = total + productos[0].precio;
    carrito.push(productos[0]);
    abrirCarrito()
    sumarAlCarrito (0)
    break;
case 2:
    console.log("Has seleccionado  " + producto + "Campera River")
    total = total + productos[0].precio;
    carrito.push(productos[0]);
    abrirCarrito()
    sumarAlCarrito (1)
    break;
case 3:
    console.log("Has seleccionado " + producto + "Campera Boca")
    total = total + productos[0].precio;
    carrito.push(productos[0]);
    abrirCarrito()
    sumarAlCarrito (2)
    break;
case 4:
    console.log("Has seleccionado " + producto + "Remera seleccion Argentina")
    total = total + productos[0].precio;
    carrito.push(productos[0]);
    abrirCarrito()
    sumarAlCarrito (3)
    break;
case 5:
    console.log("Has seleccionado " + producto + "Jogging Boca")
    total = total + productos[0].precio;
    carrito.push(productos[0]);
    abrirCarrito()
    sumarAlCarrito (4)
    break;

default:
    break;
}

// Se le pregunta si quiere agregar algun producto mas

let confirmacion = confirm("¿Quieres algún producto más?")

while (confirmacion) {
    producto = parseInt(prompt("Elige un producto para agregar al carrito: \n 1. Remera Boca \n 2. Remera River \n 3.Campera Seleccion Argentina \n 4. Campera Boca \n 5. Campera River"))
}

switch (producto) {
    case 1:
        console.log("Has seleccionado el producto " + producto + ",'" + productos[0].prenda + "': $" + productos[0].precio)
            total = total + productos[0].precio;
            carrito.push(productos[0]);
            sumarAlCarrito (0)

        break;
    case 2:
        console.log("Has seleccionado el producto " + producto + ",'" + productos[0].prenda + "': $" + productos[0].precio)
            total = total + productos[0].precio;
            carrito.push(productos[0]);
            sumarAlCarrito (1)
        break;
    case 3:
        console.log("Has seleccionado el producto " + producto + ",'" + productos[0].prenda + "': $" + productos[0].precio)
        total = total + productos[0].precio;
        carrito.push(productos[0]);
        sumarAlCarrito (2)
        break;
    case 4:
        console.log("Has seleccionado el producto " + producto + ",'" + productos[0].prenda + "': $" + productos[0].precio)
            total = total + productos[0].precio;
            carrito.push(productos[0]);
            sumarAlCarrito (3)
        break;
    case 5:
        console.log("Has seleccionado el producto " + producto + ",'" + productos[0].prenda + "': $" + productos[0].precio)
            total = total + productos[0].precio;
            carrito.push(productos[0]);
            sumarAlCarrito (4)
        break;
    
    default:
        break;
}

confirmacion = confirm("¿Quieres algún producto más?")

/* Le pregunto si quiere eliminar un producto */
let eliminacion = confirm("¿Antes de ver el total, quieres eliminar alguno de los productos?")

/* Hago el while por si dice que si */
while (eliminacion) {
    
    let producto = parseInt(prompt("Elige un producto para agregar al carrito: \n 1. Remera Boca \n 2. Remera River \n 3.Campera Seleccion Argentina \n 4. Campera Boca \n 5. Campera River"))

    /* Si elige un numero que no este entre el 1 y el 5*/
    while (producto == NaN || producto > 9 || producto <= 0) {
        producto = parseInt(prompt("Elige un producto para agregar al carrito: \n 1. Remera Boca \n 2. Remera River \n 3.Campera Seleccion Argentina \n 4. Campera Boca \n 5. Campera River"))
    }

    let index = carrito.findIndex(propiedad => propiedad.id == producto)

    if (index != -1) {
        total = total - carrito[index].precio
        carrito.splice(index, 1)
        document.getElementById.apply("carritoLista").removeChild(document.getElementById("carritoLista").children[index])
    }


    /* Si elige un numero que no tiene prenda */
    else {
        alert("¡Ese producto no esta en su carrito!")
    }

    // Pregunto si quiere eliminar el producto 
    eliminacion = confirm("¿Desea eliminar otro producto?")
}


let precioTotal = document.createElement("h2")
precioTotal.innerHTML = `Total (+IVA): ${iva(total)}`
precioTotal.style.margin = "1rem"
precioTotal.style.backgroundColor = "black"
precioTotal.style.color = "white"
document.getElementById("carritoLista").appendChild(precioTotal)

//Precio final
for (const cuenta of carrito) {
    console.log("Producto: " + cuenta.prenda + "\nPrecio: " + cuenta.precio)

}

// Genero un numero de compra
function codigoUsuario(min, max) {
    return (Math.random() * (max - min) + min).toFixed();
}

// Hago un mapa para el sort de Menor a mayor
const precios = productos.map((el) => {
    return {
        precio: el.precio,
        prenda: el.prenda
    }
}
)

// Hago un mapa para el sort de Mayor a menor
const precios2 = productos.map((el) => {
    return {
        precio: el.precio,
        producto: el.producto
    }
}
)

function sumarAlCarrito(valor) {
    let prod1 = document.createElement("div")
    prod1.innerHTML = `<h3> ${productos[valor].producto} </h3>
        <p> $${iva(productos[valor].precio)} </p>`
    prod1.style.margin = "1rem"
    return document.getElementById("carritoLista").appendChild(prod1)
}

// Esta función cambia el display del carrito de none a block 
function abrirCarrito() {
    carritoLista = document.getElementById("carritoLista").style.display = "block"
}

// Esta función cambia el display del carrito de block a none 
function cerrarCarrito() {
    carritoLista = document.getElementById("carritoLista").style.display = "none"
}
// Debug de Lista con precios de Menor a Mayor 
console.log("Precios Menor a Mayor:")
console.log(precios.sort((a, b) => a.precio - b.precio))

// Debug de Lista con precios de Mayor a Menor 
console.log("Precios Mayor a Menor:")
console.log(precios2.sort((a, b) => b.precio - a.precio)) 