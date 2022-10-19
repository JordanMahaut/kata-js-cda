"use strict"
function loopin() {
    let pyra = new Array("#")
    for(let i=1;i<=4;i=i+1){
        pyra.push("#")
        for (let j = 1; j <= i ; j++) {
            document.write(pyra)
        }
        document.write("</br>");
    }
}