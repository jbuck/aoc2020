const fs = require('fs')

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(i => !!i)
  .map(i => {
    console.log(i)
    return i.match(/(?<min>\w+)-(?<max>\w+) (?<letter>\w): (?<password>\w+)/).groups
  })
  .filter(i => {
    let count = 0
    for (let n = 0; n < i.password.length; n++) {
      if (i.password[n] == i.letter) {
        count++
      }
    }
    
    return count >= i.min && count <= i.max
  })

console.log(input.length)
