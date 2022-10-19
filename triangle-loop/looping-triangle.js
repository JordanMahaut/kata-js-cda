"use strict"
function looping(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            arr.push("#");
            console.log(arr);
        }
        console.log("\n");
    }
}