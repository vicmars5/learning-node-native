const { IsPrime } = require('./build/Release/addon')
const { isPrime } = require('./is-prime.js')

const number = 654188429
const NATIVE = 'native'
const JS = 'js'

console.time(NATIVE)
console.log(`${NATIVE}: checking whether ${number} is prime... ${IsPrime(number)}`)
console.timeEnd(NATIVE)

console.time(JS)
console.log(`${JS}: checking whether ${number} is prime... ${isPrime(number)}`)
console.timeEnd(JS)
