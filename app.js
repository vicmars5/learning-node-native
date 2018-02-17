// note that the compiled addon is placed under the following path
const { Total } = require('./build/Release/addon')
const { total } = require('./main.js')

const arr = (Array(5000000).fill(0)).map(() => Math.floor((Math.random() * 50)))
const buff = Buffer.from(arr)
// `Hello` function returns a string, so we have to console.log
console.time('c++')
console.log(`length: ${arr.length}. Sum: ${Total(buff, buff.length)}`)
console.timeEnd('c++')
console.time('js')
console.log(`length: ${arr.length}. Sum: ${total(arr)}`)
console.timeEnd('js')
