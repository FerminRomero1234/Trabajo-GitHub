let contenedorCuenta = document.getElementById("productosComprados");
carro = JSON.parse(localStorage.getItem("carro"));
console.log(carro);
// Busco el boton de comprar
let botonComprar = document.getElementById("btnCompra");

let botonCancelar = document.getElementById("btnCancelar");

/* Cuando tocamos el boton de "Comprar", se resetea el carrito */
const compraProcesada = () => {

    if (carro.length == 0) {
        /* Utilizo un Sweet Alert por si no hay productos en el carrito y el usuario clickea "Comprar" */
        Swal.fire({
            title: "Error",
            titleText: "No has seleccionado ningún producto",
            iconColor: "red",
            icon: "error",
            color: "black",
            confirmButtonText: "OK",
            confirmButtonColor: "black",
            padding: "1rem 0.3rem"
        })
    }
    else {
        /* Utilizo un Sweet Alert para decir que se proceso la compra */
        Swal.fire({
            title: "¡Su compra ha sido procesada!",
            iconColor: "#0263a0",
            icon: "success",
            color: "black",
            confirmButtonText: "OK",
            confirmButtonColor: "black",
            padding: "1rem 0.3rem"
        })
        .then(()=>{
            newLocation();
        })

        function newLocation() {
            window.location.href="../index.html";
        }
        
        
    }
    /* Spread del Carrito */
    console.log(...carro);
    carro.length = 0;
    actualizarCarrito();
}
botonComprar.addEventListener("click", compraProcesada);


carro.forEach((prod) => {
    contenedorCuenta.innerHTML += `
        <p><strong>x${prod.cantidad}</strong> ${prod.nombre}: <span class="item-precio">$${prod.precio}</span></p>        
    `;
})

contenedorCuenta.innerHTML += `
<p class="item-cuenta"> Total (+IVA): $${(carro.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)*1.21).toFixed(2)}</p>
`;

const actualizarCarrito = () => {
    /* Vacío el contenedor cada vez que entro para que no se repita el array por cada seleccion */
    contenedorCuenta.innerHTML = "";
    /* Para cada producto del carro creo una tarjeta de ese mismo producto */
    carro.forEach(() => {       
        localStorage.setItem("carro", JSON.stringify(carro));
    })    

}