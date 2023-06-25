import { agregarHtml } from "./function/home.js"
window.addEventListener("load", async (e)=>{
    //creo una variable en la cual voy a agregar los elementos html
    let contenedor = document.querySelector(".contenedor");
    
    //llamo a la funcion agregarhtml en la cual recibe por párametro el contenedor padre y la cantidad de filas y columnas(esto parametros seran obtenidos desde la base de datos)
    agregarHtml(contenedor, 2, 3)
    
    //accedo a todos los elementos creados con la clase btnRegistro la cual fueron creado en la funcion agregarhtml para poder acceder a sus propiedades
    let btn = document.querySelectorAll(".btnRegistro");

    //recorro btn para estar atentos a si el usuario oprime a lgunos de los botones y poder redireccionarlo a la vista para ver las propiedades.
    btn.forEach(elemen =>{
        elemen.addEventListener("click", (e)=>{
            console.log(elemen.name);
        })
    })

})