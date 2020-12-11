const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2]).filter(i => !!i).map(i => parseInt(i, 10))

function calculateSums(input, preamble) {
  let rv = []

  for (let i = 0; i < preamble; i++) {
    for (let j = 0; j < preamble; j++) {
      if (input[i] != input[j]) {
        rv.push(input[i] + input[j])
      }
    }
  }

  return rv
}

const preamble = 25
for (let i = 0; i < input.length - preamble; i++) {
  let rv = calculateSums(input.slice(i), preamble)

  if (!rv.includes(input[i + preamble])) {
    console.log(i, input[i + preamble])
  }
}
