const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2])

let groups = []
let current = {}

for (const i of input) {
  if (i == "") {
    groups.push(current)
    current = {}
  }

  for (const s of i) {
    current[s] = true
  }
}

let count = 0
groups.forEach(g => {
  if (Object.keys(g).length > count) {
    count = Object.keys(g).length
  }
})

console.log(count)
