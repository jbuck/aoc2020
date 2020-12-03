const fs = require('fs')

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(i => !!i).map(i => i.split(''))

let trees_hit = 0
for (let y = 0, x = 0; y < input.length; y++) {
  if (input[y][x] == '#') {
    trees_hit++
  }

  x = (x + 3) % input[0].length
}
console.log(trees_hit)
