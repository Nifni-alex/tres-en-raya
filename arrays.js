const input = require("prompt-sync")({ sigint: true })

const lista = []
const lista2 = []

for (let i = 0; i < 100; i++) {;
    if (i % 2 === 1) {
        lista.push(i)
    } if (i % 2 === 0) {
        lista2.push(i )
    }
    
}


console.log(lista + "es impar" )
console.log(lista2 + ' es par')



   