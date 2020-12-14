const { runInContext } = require('vm')
const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2]).filter(i => !!i).map(i => parseInt(i, 10)).sort((a, b) => a - b)
const combo_table = {
  1: 1,
  2: 2,
  3: 4,
  4: 7,
}

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

  let runs = []
  let length = 0
  rv.forEach(j => {
    if (j == 1) {
      length++
    } else {
      if (length != 0) {
        runs.push(length)
      }
      length = 0
    }
  })

  return runs.map(r => combo_table[r]).reduce((prev, curr) => prev * curr, 1)
}

console.log(calculateDifferences(input))
