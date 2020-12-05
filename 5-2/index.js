const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2]).filter(i => !!i)

for (let i = 0; i < input.length; i++) {
  let curr = input[i], next = input[i+1]

  if (next - curr == 2) {
    console.log(next - 1)
  }
}
