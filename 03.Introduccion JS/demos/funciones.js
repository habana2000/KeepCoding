let result1
/**
 * 
 * @param {string} name 
 * @param {string|undefined} surname 
 * @param {number|undefined} age 
 * @returns {string}
 */
function hello1 ( name, surname='Skywalker', age = 37) {
    return `Hello ${name} ${surname}. You are ${age} years old`
}

result1 = hello1('Xavi')
console.log(result1)
result1 = hello1('Xavi', undefined, 40)
console.log(result1)
result1 = hello1('Xavi', 'Roca', 55)
console.log(result1)

let result2
const hello2 = function( name, surname='Skywalker', age = 37) {
    return `Hello ${name} ${surname}. You are ${age} years old`
}
result2 = hello2('Xavi')
console.log(result2)

// Arrow functions

let result3
const hello3 = ( name, surname='Skywalker', age = 37) => {
    return `Hello ${name} ${surname}. You are ${age} years old`
}
result3 = hello3('Xavi')
console.log(result3)

let result4
const hello4 = ( name, surname='Skywalker', age = 37) => `Hello ${name} ${surname}. You are ${age} years old`
result4 = hello4('Xavi')
console.log(result4)

let result5
const hello5 = name => `Hello ${name}`
result5 = hello5('Xavi')
console.log(result5)

