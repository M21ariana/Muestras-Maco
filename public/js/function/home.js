function agregarHtml(contenedor, filas, columnas){
    let cont = 65;
    
    for (let columna = 0; columna < columnas; columna++) {
        contenedor.innerHTML +=`<div class="columna${columna}"></div>`;
        
        for (let fila = 0; fila < filas; fila++) {
            let temp = document.querySelector(`.columna${columna}`);
            temp.innerHTML += `<button class="btnRegistro" name="${String.fromCharCode(cont) + (fila + 1)}">${String.fromCharCode(cont) + (fila + 1)}</button>`;
            
        };
        cont++;
    };    
};
function prueba3(){
    prueba();
    console.log("funcionaaaaaaaaaaaaaaaaaaaaaa");
}
function prueba2(){
    console.log("funcionaaaaaaaaaaaaaaaaaaaaaa");
}
export {agregarHtml, prueba2, prueba3}