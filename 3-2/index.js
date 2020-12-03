const fs = require('fs')

const input = fs.readFileSync('input.txt', { encoding: 'utf-8' }).split('\n').filter(i => !!i).map(i => i.split(''))

const calculate_trees_hit = (input, right, down) => {
  let trees_hit = 0

  for (let y = 0, x = 0; y < input.length; y = y + down) {
    if (input[y][x] == '#') {
      trees_hit++
    }
  
    x = (x + right) % input[0].length
  }

  return trees_hit
}

const c1_1 = calculate_trees_hit(input, 1, 1),
  c3_1 = calculate_trees_hit(input, 3, 1),
  c5_1 = calculate_trees_hit(input, 5, 1),
  c7_1 = calculate_trees_hit(input, 7, 1),
  c1_2 = calculate_trees_hit(input, 1, 2);

console.log(`1, 1 = ${c1_1}`)
console.log(`3, 1 = ${c3_1}`)
console.log(`5, 1 = ${c5_1}`)
console.log(`7, 1 = ${c7_1}`)
console.log(`1, 2 = ${c1_2}`)
console.log(c1_1 * c3_1 * c5_1 * c7_1 * c1_2)
