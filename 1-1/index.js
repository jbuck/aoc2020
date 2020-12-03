const fs = require('fs')

const input = fs.readFileSync('input.txt', {encoding: 'utf-8'}).split('\n').filter(i => !!i).map(i => parseInt(i, 10))

for (let i of input) {
  for (let n of input) {
    if (i + n == 2020) {
      console.log(`${i} * ${n} = ${i * n}`)
      process.exit(0)
    }
  }
}
