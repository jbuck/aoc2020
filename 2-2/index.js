const fs = require('fs')

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(i => !!i)
  .map(i => {
    console.log(i)
    return i.match(/(?<min>\w+)-(?<max>\w+) (?<letter>\w): (?<password>\w+)/).groups
  })
  .filter(i => {
    return (i.password[i.min-1] == i.letter || i.password[i.max-1] == i.letter) && i.password[i.min-1] != i.password[i.max-1]
  })

console.log(input.length)
