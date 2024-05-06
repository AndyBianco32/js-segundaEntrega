let listaEntradas = [
    { id: 2, nombre: "dia1", categoria: "tickets", tipoEntrada: "entrada diaria", disponibilidad : 24, costo: 2700, rutaImagen: "entrada-dia1.jpeg"  },
    { id: 3, nombre: "dia2", categoria: "tickets", tipoEntrada: "entrada diaria", disponibilidad : 74, costo: 2800, rutaImagen: "entrada-dia2.jpeg" },
    { id: 5, nombre: "dia3", categoria: "tickets", tipoEntrada: "entrada diaria", disponibilidad : 68, costo: 2900, rutaImagen: "entrada-dia3.jpeg" },
    { id: 7, nombre: "abono3dias", categoria: "tickets", tipoEntrada: "abonofull", disponibilidad : 0, costo: 6200, rutaImagen: "entrada-abonoFull.jpg" },
    { id: 8, nombre: "abono2dias", categoria: "tickets", tipoEntrada: "entrada dia 1 y 2", disponibilidad : 78, costo: 5000, rutaImagen: "abono-dia1y2.jpg" },
    { id: 10, nombre: "abono2dias", categoria: "tickets", tipoEntrada: "entrada dia 1 y 3", disponibilidad : 53, costo: 5100, rutaImagen: "abono-dia1y3.jpg" },
    { id: 15, nombre: "abono2dias", categoria: "tickets", tipoEntrada: "entrada dia 2 y 3", disponibilidad : 29, costo: 5300, rutaImagen: "abono-dia2y3.jpg" },
]


principal(listaEntradas)
function principal (entradas){

    let carrito = []
    let carritoLS = JSON.parse(localStorage.getItem("carrito"))
    if (carritoLS){
        carrito = carritoLS
    } 
    renderizarCarrito(carrito)


    let botonBuscar = document.getElementById("botonBuscar")
    botonBuscar.addEventListener("click", () => filtroyBusqueda(entradas, carrito))
    filtrarentradas(entradas, carrito)

}


function filtroyBusqueda(entradas, carrito){
    let entradasFiltradas = filtro(entradas)
    filtrarentradas(entradasFiltradas, carrito)
}

function filtro(entradas){
    let inputBusqueda = document.getElementById("inputBusqueda")
    return entradas.filter(entrada => entrada.nombre.includes(inputBusqueda.value) || entrada.tipoEntrada.includes(inputBusqueda.value))
}



function filtrarentradas(entradas, carrito) {

    let sectionEntradas = document.getElementById("sectionEntradas")
    sectionEntradas.innerHTML = ""

    entradas.forEach(entrada => {
        let tarjetaTicket = document.createElement("article")

        let mensaje
        if (entrada.disponibilidad < 30 && entrada.disponibilidad > 0){
            tarjetaTicket.className = "ticketsEntradasBajaDisponibilidad"
            mensaje = " ultimas disponibles"
        } else if (entrada.disponibilidad === 0){
            // tarjetaTicket[4].remove()
            tarjetaTicket.className = "ticketsEntradasAgotadas"
            mensaje = "ENTRADAS AGOTADAS"
        } else if (entrada.disponibilidad >= 30){
            tarjetaTicket.className = "ticketsEntradas"
            mensaje = "Disponibles :" + entrada.disponibilidad
        }

        tarjetaTicket.innerHTML = `
        <h3>${entrada.nombre}</h3>
        <img src=./img/${entrada.rutaImagen} />
        <p>Precio : ${entrada.costo}</p>
        <p> ${mensaje} </p>
        <button id=${entrada.id}>Agregar al carrito</button>
        `
     

        sectionEntradas.appendChild(tarjetaTicket)
        
        let botonAC = document.getElementById(entrada.id)
        botonAC.addEventListener("click", (e) => agregarCarrito(e, entradas, carrito))
    });

}

    function agregarCarrito(e, entradas, carrito){

        let idDeEntrada = Number(e.target.id)

        entradaEnCarrito = carrito.findIndex(entrada => entrada.id === idDeEntrada)
        entradaBuscada = entradas.find(entrada => entrada.id === idDeEntrada)

        if (entradaEnCarrito !== -1){
            carrito[entradaEnCarrito].unidades++
            carrito[entradaEnCarrito].subtotal = carrito[entradaEnCarrito].precioUnitario * carrito[entradaEnCarrito].unidades
        } else {
            carrito.push({
                id: entradaBuscada.id,
                nombre: entradaBuscada.nombre,
                precioUnitario: entradaBuscada.costo,
                unidades: 1,
                subtotal: entradaBuscada.costo

            })
        }
        
        localStorage.setItem("carrito", JSON.stringify(carrito))
        renderizarCarrito(carrito)
    }

    function renderizarCarrito(carrito){
        let contenedorCarrito = document.getElementById("contenedorCarrito")
        contenedorCarrito.innerHTML= ""

        carrito.forEach(entrada => {
            let tarjetaEntradaCarrito = document.createElement("div")
            tarjetaEntradaCarrito.className = "tarjetaEntradaCarrito"
            tarjetaEntradaCarrito.id = `tarjetaEntradaCarrito${entrada.id}`

            tarjetaEntradaCarrito.innerHTML = `
            <h3>${entrada.nombre}</h3>
            <p>${entrada.precioUnitario}</p>
            <p>${entrada.unidades}</p>
            <p>${entrada.subtotal}</p>
            <button id=eliminar${entrada.id}>ELIMINAR</button>
            `
            contenedorCarrito.appendChild(tarjetaEntradaCarrito)

            let botoneliminar = document.getElementById(`eliminar${entrada.id}`)
            botoneliminar.addEventListener("click", (e) => eliminarTarjetaCarrito(carrito,e))
        })

    }

    function eliminarTarjetaCarrito(carrito, e){
        let id = Number(e.target.id.substring(8))
        let filaAEliminar = document.getElementById(`tarjetaEntradaCarrito${id}`)
        filaAEliminar.remove()
    }




/* let merchandise = [
    { id: 1, nombre: "buzo", categoria: "indumentaria", color: "negro", precio: 3400 },
    { id: 4, nombre: "buzo", categoria: "indumentaria", color: "blanco", precio: 3450 },
    { id: 6, nombre: "gorra", categoria: "accesorios", color: "negra", precio: 2100 },
    { id: 9, nombre: "campera", categoria: "indumentaria", color: "negro", precio: 4000 },
    { id: 11, nombre: "llavero", categoria: "accesorios", color: "plata", precio: 1800 },
    { id: 12, nombre: "remera", categoria: "indumentaria", color: "blanco", precio: 3000 },
    { id: 13, nombre: "pulsera", categoria: "accesorios", color: "negra", precio: 1500 },
    { id: 14, nombre: "encendedor", categoria: "accesorios", color: "negra", precio: 1700 },
]
function compramerchandise() {

} */


