const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2])

let groups = []
let current = {size:0}

for (const i of input) {
  if (i == "") {
    groups.push(current)
    current = {size:0}
  } else {
    current.size++
  }

  for (const s of i) {
    if (current[s]) {
      current[s]++
    } else {
      current[s] = 1
    }
  }
}

console.log(groups)

let count = 0
groups.forEach(g => {
  Object.keys(g).filter(gi => gi != "size").forEach(gi => {
    if (g[gi] == g.size) {
      count++
    }
  })
})

console.log(count)
