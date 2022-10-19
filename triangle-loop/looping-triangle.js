"use strict"
function loopin() {
    let size = prompt('Taille de la pyramide ? ');
    let pyra = "";
    for(let i=1; i<=size; i++)
    {
        pyra = pyra +"#";
        document.write("</br>")
        document.write(pyra)
    }

}