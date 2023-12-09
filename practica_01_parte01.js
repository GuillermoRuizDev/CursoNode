//console.log("------------------------- Resolucion 01 -----------")

let fs = require('fs');

let archivo = "Archivo.txt"

function leerArchivo(archivo){    
    return fs.readFileSync(archivo, 'utf-8')
}

const promesa = new Promise((resolve, reject) => {    
    resolve(archivo);
  })
  .then( (data) => console.log(leerArchivo(data).toUpperCase()))
  .catch((error) => console.log(error));

