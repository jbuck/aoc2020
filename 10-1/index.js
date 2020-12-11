const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2]).filter(i => !!i).map(i => parseInt(i, 10)).sort((a, b) => a - b)

function calculateDifferences(input) {
  let c = 0
  let a = [...input]
  let rv = []

  // Add device voltage which is 3 higher than max
  a.push(a[a.length - 1] + 3)

  for (let t of a) {
    rv.push(t - c)
    c = t
  }

  rv.sort((a, b) => a - b)

  let rv2 = {1: 0, 2: 0, 3: 0}
  rv.forEach(t => {
    rv2[t]++
  })

  return rv2[1] * rv2[3]
}

console.log(calculateDifferences(input))
