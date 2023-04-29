// Clase constructora para instanciar objetos de Bebidas
function Bebida(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
    this.seleccionado = false
}

// Clase constructora para instanciar objetos de Menú
function Menu(nombre, precio, descripcion, foto) {
    this.nombre = nombre
    this.precio = precio
    this.descripcion = descripcion
    this.foto = foto
    this.seleccionado = false
}

// Objetos para crear listado de bebidas
var bebida1 = new Bebida("Martini", 2550)
var bebida2 = new Bebida("Cappuccino", 1370)
var bebida3 = new Bebida("Latte", 1350)
var bebida4 = new Bebida("Mojito", 2290)

//Incorpora los objetos de bebidas en un arreglo
var listadoBebidas = [ bebida1, bebida2, bebida3, bebida4 ]



// Objetos para crear listado de Menú
var menu1 = new Menu("Insalata de riso", 6750, "Ensalada para dos", "https://www.allrecipes.com/thmb/DnJpkLhBw09h2bQHnj-3_klYQSs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3924402-fde39bbdca814afc878c7938d37c7c76.jpg")
var menu2 = new Menu("Insalata al cipollotti", 5990, "Ensalada para uno", "https://www.cucchiaio.it/content/cucchiaio/it/ricette/2009/12/ricetta-insalata-ceci-patate-cipollotti/_jcr_content/header-par/image_single.img.jpg/1410277015032.jpg")
var menu3 = new Menu("Insalata Caprese", 8250, "Ensala para uno con oregano", "https://www.recetasjudias.com/wp-content/uploads/2016/01/Ensalada-Caprese2.jpg")

// Definición del arreglo vacío para los items del Menú
var listadoMenu = []
// Al arreglo vacío incorporamos los 3 objetos para los items del menú
listadoMenu.push(menu1, menu2, menu3)


//Función utilizada para detectar cuando el usuario hace click en el chec de una bebida
function cambioBebida(indice, checkbox) {
    var seleccionado = $(checkbox).prop('checked') // Consulta si el check que disparó el evento está checked o no
    listadoBebidas[indice].seleccionado = seleccionado // Cambia en el arreglo de objetos la propiedad seleccionado al item de bebida que corresponde
    console.log(listadoBebidas);
}


$(document).ready(function(){
    //Ciclo que muestra al usuario los items de bebidas 
    listadoBebidas.forEach((bebida, index) => {
        $("#listado-bebidas").append(`
            <li class="list-group-item d-flex justify-content-between">
                <div class="form-check">
                    <input 
                        class="form-check-input" 
                        type="checkbox" value="" 
                        id="flexCheckDefault" 
                        onChange="cambioBebida(${index}, this)"
                    >
                    <label class="form-check-label" for="flexCheckDefault">
                        ${bebida.nombre}
                    </label>
                </div>
                <div class="fw-bold">$${bebida.precio.toLocaleString('es-CL')}</div>
            </li>
        `)
    })


    //Ciclo que muestra al usuario los items de Menú
    listadoMenu.forEach((menu, index) => {
        $("#listado-menu").append(`
            <li class="list-group-item">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label fw-bold" for="flexCheckDefault">
                        ${menu.nombre}
                    </label>
                </div>
                <div class="d-flex justify-content-between">
                    <div>${menu.descripcion}</div>
                    <div><img src="${menu.foto}" class="rounded-circle" width="50px"></div>
                </div>
                <div class="fw-bold">$${menu.precio.toLocaleString('es-CL')}</div>
            </li>
        `)
    })
})


