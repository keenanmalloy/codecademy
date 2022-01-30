// forecast today
const kelvin = 293
// converting kelving to celsius
const celsius = kelvin - 273
// converting celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit)
console.log(`the temperature is ${fahrenheit} degrees Fahrenheit.`);