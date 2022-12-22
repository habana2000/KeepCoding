// forEach --> Para recorrer los elementos de un array
// Función anónima, porque no tiene nombre
[1,2,3].forEach(val => console.log(val))
console.log('---')

// Otro ejemplo

const arr = [1,2,3]

const multiplicaPor2 = valor => {
    console.log(valor * 2 )
}

arr.forEach(multiplicaPor2)

// O lo podemos hacer como una función anónima
arr.forEach(valor => {
    console.log(valor * 2 )
})

// map

console.log([20,30,40].map(val => val * 2))
