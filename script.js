
function principal (entradas){

    let carrito = obtenerCarritoLS() 
    renderizarCarrito()


    let botonBuscar = document.getElementById("botonBuscar")
    botonBuscar.addEventListener("click", () => filtroyBusqueda(entradas,))
    filtrarentradas(entradas)

    let botonVerOcultar = document.getElementById("botonVerOcultar")
    botonVerOcultar.addEventListener("click", verOcultar)

    let botonComprar = document.getElementById("botonComprar")
    botonComprar.addEventListener("click", finalizarCompra)
}

function verOcultar(e) {
    let contenedorCarrito = document.getElementById("contenedorCarrito")
    let sectionEntradas = document.getElementById("sectionEntradas")

    contenedorCarrito.classList.toggle("oculto")
    sectionEntradas.classList.toggle("oculto")

    // if (e.target.innerText === "VER CARRITO") {
    //     e.target.innerText = "VER PRODUCTOS"
    // } else {
    //     e.target.innerText = "VER CARRITO"
    // }

    e.target.innerText = e.target.innerText === "VER CARRITO" ? "VER PRODUCTOS" : "VER CARRITO"

}

function obtenerCarritoLS() {
    let carrito = []
    let carritoLS = JSON.parse(localStorage.getItem("carrito"))
    if (carritoLS) {
        carrito = carritoLS
    }
    return carrito
}

function finalizarCompra() {
    localStorage.removeItem("carrito")
    renderizarCarrito([])
    Swal.fire({
        title: 'COMPRA EXITOSA',
        text: 'Tu compra se ha realizado con exito',
        icon: 'success',
        // confirmButtonText: 'ACEPTAR'
        showConfirmButton: false,
        timer: 2000,
        color: "white",
        background: "linear-gradient(rgba( 5, 7, 12, 0.80), rgba( 5, 7, 12, 0.80))",
      })
    
}


function filtroyBusqueda(entradas){
    let entradasFiltradas = filtro(entradas)
    filtrarentradas(entradasFiltradas)
}

function filtro(entradas){
    let inputBusqueda = document.getElementById("inputBusqueda")
    return entradas.filter(entrada => entrada.nombre.includes(inputBusqueda.value) || entrada.tipoEntrada.includes(inputBusqueda.value))
}



function filtrarentradas(entradas) {

    let carrito = obtenerCarritoLS()
    let sectionEntradas = document.getElementById("sectionEntradas")
    sectionEntradas.innerHTML = ""

    entradas.forEach(entrada => {
        let tarjetaTicket = document.createElement("article")

        let mensaje
        if (entrada.disponibilidad < 30 && entrada.disponibilidad > 0){
            // tarjetaTicket.className = "ticketsEntradasBajaDisponibilidad"
            mensaje = "Ultimas disponibles"
        } else if (entrada.disponibilidad === 0){
            // tarjetaTicket[4].remove()
            // tarjetaTicket.className = "ticketsEntradasAgotadas"
            mensaje = "ENTRADAS AGOTADAS" 
        } else if (entrada.disponibilidad >= 30){
            // tarjetaTicket.className = "ticketsEntradas"
            mensaje = "Disponibles :" + entrada.disponibilidad
        }

        tarjetaTicket.innerHTML = `
        <h3>${entrada.nombre}</h3>
        <img src=../img/${entrada.rutaImagen} />
        <p>$ ${entrada.costo}</p>
        <p> ${mensaje} </p>
        <button id=${entrada.id}>Agregar al carrito</button>
        `
        switch (entrada.nombre) {
            case "21 Junio":
                // tarjetaTicket.className = "ticketsdia1"
                if(mensaje === "Ultimas disponibles"){
                    tarjetaTicket.className = "ticketsEntradasBajaDisponibilidad ticketsdia1"
               } else if(mensaje === "ENTRADAS AGOTADAS"){
                    tarjetaTicket.className = "ticketsEntradasAgotadas ticketsdia1" 
                } else{
                    tarjetaTicket.className = "ticketsdia1"
                }
                
                break
            case "22 Junio":
                // tarjetaTicket.className = "ticketsdia2"
                if(mensaje === "Ultimas disponibles"){
                    tarjetaTicket.className = "ticketsEntradasBajaDisponibilidad ticketsdia2"
               } else if(mensaje === "ENTRADAS AGOTADAS"){
                    tarjetaTicket.className = "ticketsEntradasAgotadas ticketsdia2" 
                } else{
                    tarjetaTicket.className = "ticketsdia2"
                }

                break;
            case "23 Junio":
                // tarjetaTicket.className = "ticketsdia3"
                if(mensaje === "Ultimas disponibles"){
                    tarjetaTicket.className = "ticketsEntradasBajaDisponibilidad ticketsdia3"
               } else if(mensaje === "ENTRADAS AGOTADAS"){
                    tarjetaTicket.className = "ticketsEntradasAgotadas ticketsdia3" 
                } else{
                    tarjetaTicket.className = "ticketsdia3"
                }
    
                break;
            case "21 + 22 Junio":
                // tarjetaTicket.className = "ticketsdia1y2"
                if(mensaje === "Ultimas disponibles"){
                    tarjetaTicket.className = "ticketsEntradasBajaDisponibilidad ticketsdia1y2"
               } else if(mensaje === "ENTRADAS AGOTADAS"){
                    tarjetaTicket.className = "ticketsEntradasAgotadas ticketsdia1y2" 
                } else{
                    tarjetaTicket.className = "ticketsdia1y2"
                }
        
                break;
            case "21 + 23 Junio":
                // tarjetaTicket.className = "ticketsdia1y3"
                if(mensaje === "Ultimas disponibles"){
                    tarjetaTicket.className = "ticketsEntradasBajaDisponibilidad ticketsdia1y3"
               } else if(mensaje === "ENTRADAS AGOTADAS"){
                    tarjetaTicket.className = "ticketsEntradasAgotadas ticketsdia1y3" 
                } else{
                    tarjetaTicket.className = "ticketsdia1y3"
                }
            
                break;
            case "22 + 23 Junio":
                // tarjetaTicket.className = "ticketsdia2y3"
                if(mensaje === "Ultimas disponibles"){
                    tarjetaTicket.className = "ticketsEntradasBajaDisponibilidad ticketsdia2y3"
               } else if(mensaje === "ENTRADAS AGOTADAS"){
                    tarjetaTicket.className = "ticketsEntradasAgotadas ticketsdia2y3" 
                } else{
                    tarjetaTicket.className = "ticketsdia2y3"
                }
                
                break;
            case "21 + 22 + 23 Junio":
                // tarjetaTicket.className = "ticketsdia1-2y3"
                
               if(mensaje === "Ultimas disponibles"){
                    tarjetaTicket.className = "ticketsEntradasBajaDisponibilidad ticketsdia1-2y3"
               } else if(mensaje === "ENTRADAS AGOTADAS"){
                    tarjetaTicket.className = "ticketsEntradasAgotadas ticketsdia1-2y3" 
                } else{
                    tarjetaTicket.className = "ticketsdia1-2y3"
                }
                    
                break;
        
            default:
                break;
        }
        
        sectionEntradas.appendChild(tarjetaTicket)
        
        let botonAC = document.getElementById(entrada.id)
        botonAC.addEventListener("click", (e) => agregarCarrito(e, entradas))
    });

}

    function agregarCarrito(e, entradas){
        let carrito = obtenerCarritoLS()
        let idDeEntrada = Number(e.target.id)

        entradaEnCarrito = carrito.findIndex(entrada => entrada.id === idDeEntrada)
        entradaBuscada = entradas.find(entrada => entrada.id === idDeEntrada)

        // Swal.fire({
        //     title: "PERFECTO",
        //     html: "Se ha agregado un producto a tu Carrito",
        //     icon: "success",
        //     showConfirmButton: false,
        //     timer: 2000,
        //     color: "white",
        //     background: "linear-gradient(rgba( 5, 7, 12, 0.80), rgba( 5, 7, 12, 0.80))",
        //   });
          Toastify({
            text: "Producto agregado al Carrito",
            className: "info",
            style: {
              background: "linear-gradient(rgba( 5, 7, 12, 0.80), rgba( 5, 7, 12, 0.80))",
            }
          }).showToast();

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

    function renderizarCarrito(){
        let carrito = obtenerCarritoLS()
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
            botoneliminar.addEventListener("click", (e) => eliminarTarjetaCarrito(e))
        })

    }

    function eliminarTarjetaCarrito(e){
        let carrito = obtenerCarritoLS() 
        let id = Number(e.target.id.substring(8))
        // let filaAEliminar = document.getElementById(`tarjetaEntradaCarrito${id}`)
        // filaAEliminar.remove()
        carrito = carrito.filter(entrada => entrada.id !== id)
        localStorage.setItem("carrito", JSON.stringify(carrito))
        e.target.parentElement.remove()
        
    }

    // const pedirInfo = (todoOK) => {
    //     return new Promise( (resolve, reject) => {
    //         setTimeout(() => {
    //             if (todoOK) {
    //                 resolve(listaEntradas)
    //             } else {
    //                 reject("ALGO SALIO MAL EN EL CAMINO")
    //             }
    //         }, 2000)
    //     } )
    // }
    
    // pedirInfo(true)
    //     .then(info => {
    //         principal(info)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    //     .finally(() => console.log("FIN"))
    

function pedirInfo(){
    fetch("../data.json")
    .then(response => response.json())
    .then(entradas => principal(entradas))
    
}
pedirInfo()



 