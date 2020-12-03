const fs = require('fs')

const input = fs.readFileSync('input.txt', {encoding: 'utf-8'}).split('\n').filter(i => !!i).map(i => parseInt(i, 10))

for (let i of input) {
  for (let j of input) {
    for (let k of input) {
      if (i + j + k == 2020) {
        console.log(`${i} * ${j} * ${k} = ${i * j * k}`)
        process.exit(0)
      }
    }
  }
}
