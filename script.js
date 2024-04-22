// Festi420 //// ChamiGrow20.4 +18

alert("Bienvenidos a la celebracion de FESTI420 2°Edicion!!")

let nombre = prompt("Ingresa tu nombre").toUpperCase()
alert("Bienvenido/a " + nombre + ". Actuamos con responsabilidad y te pedimos que ingreses tu edad, si tienes 18 años o mas, eres Bienvenido, sino para la proxima amigo/a..")

let edad = Number(prompt("Ingresa tu edad"))
const MAYORIAEDAD = 18
if (edad >= MAYORIAEDAD) {
    bienvenidoAlFesti()
} else {
    alert("Lo siento, aun no eres mayor de edad. Nos vemos en futuras ediciones. Hasta la proxima amigo/a!")
}



function bienvenidoAlFesti() {
    alert("Te damos la bienvenida a una nueva edicion de este increible Festival")

    let menu

    do {
        menu = Number(prompt("Te mostramos lo que tenemos para ti:\n 1 Entradas \n 2 Merchandise \n 3 Info Festival Grilla \n 4 Info festival Fechas y Horarios \n 5 Contacto \n 0 Salir"))
        if (menu < 0 || menu > 6) {
            alert("Opcion ingresada incorrecta")
        } else if (menu === 1) {
            compraentradas()
        } else if (menu === 2) {
            compramerchandise()
        } else if (menu === 3) {
            infogrilla()
        } else if (menu === 4) {
            infofechasyhorarios()
        } else if (menu === 5) {
            contactanos()
        }
    } while (menu !== 0)
    alert("Gracias por visitarnos")
}

function compraentradas() {
    let entradas = [
        { id: 2, nombre: "dia1", categoria: "tickets", tipoEntrada: "entrada diaria", costo: 2700 },
        { id: 3, nombre: "dia2", categoria: "tickets", tipoEntrada: "entrada diaria", costo: 2800 },
        { id: 5, nombre: "dia3", categoria: "tickets", tipoEntrada: "entrada diaria", costo: 2900 },
        { id: 7, nombre: "abono3dias", categoria: "tickets", tipoEntrada: "abonofull", costo: 6200 },
        { id: 8, nombre: "abono2dias", categoria: "tickets", tipoEntrada: "entrada dia 1 y 2", costo: 5000 },
        { id: 10, nombre: "abono2dias", categoria: "tickets", tipoEntrada: "entrada dia 1 y 3", costo: 5100 },
        { id: 15, nombre: "abono2dias", categoria: "tickets", tipoEntrada: "entrada dia 2 y 3", costo: 5300 },
    ]

    alert("Te mostramos las entradas para cada dia y abonos combinados")
    let salida = ""
    entradas.forEach(tickets => {
        salida= salida + tickets.id + " - " + tickets.nombre + " - " + tickets.tipoEntrada + "\n"
    })
    alert(salida)

   
    function listar(entradas, propiedadid, propiedadnombre, propiedadtipo){
        const resultado = entradas.map(producto => producto[propiedadid] + "-" + producto[propiedadnombre]+ "-" + producto[propiedadtipo]).join("\n")
        return resultado
    }

    alert("Elige el tipo de entrada que deseas y averigua su precio")
    let opcionTicket = Number(prompt(listar(entradas, "id", "nombre", "tipoEntrada")))
    let entradaBuscada = entradas.find(tickets => tickets.id === opcionTicket)
    alert(entradaBuscada.nombre + " - "+entradaBuscada.costo)
}

function compramerchandise() {
    let merchandise = [
        { id: 1, nombre: "buzo", categoria: "indumentaria", color: "negro", precio: 3400 },
        { id: 4, nombre: "buzo", categoria: "indumentaria", color: "blanco", precio: 3450 },
        { id: 9, nombre: "gorra", categoria: "accesorios", color: "negra", precio: 2100 },
        { id: 6, nombre: "campera", categoria: "indumentaria", color: "negro", precio: 4000 },
        { id: 9, nombre: "llavero", categoria: "accesorios", color: "plata", precio: 1800 },
        { id: 9, nombre: "remera", categoria: "indumentaria", color: "blanco", precio: 3000 },
        { id: 9, nombre: "pulsera", categoria: "accesorios", color: "negra", precio: 1500 },
        { id: 9, nombre: "encendedor", categoria: "accesorios", color: "negra", precio: 1700 },
    ]

    alert("Selecciona la categoria que tenemos para ti en Indumentaria y Accesorios")
    let categoriaProducto = prompt("Elige cual de ambas categorias deseas ver").toLowerCase()
    let productoFiltrado = merchandise.filter(producto => producto.categoria.toLowerCase().includes(categoriaProducto))
    console.log(productoFiltrado)

    for (const producto of productoFiltrado){
        alert(producto.id + " - "+producto.nombre + " - " + "$" +producto.precio)
    }

}

function infogrilla() {
    alert("Los mejores DJs y bandas Musicales")
}

function infofechasyhorarios() {
    alert("17, 18 y 19 de Mayo 2024")
}

function contactanos() {
    alert("festivalchamigrow2024@gmail.com")
}
