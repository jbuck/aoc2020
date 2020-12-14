const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2]).filter(i => !!i)

function calculate(input) {
  let mask = "", mem = []
  for (let instruction of input) {
    if (instruction.startsWith("mask")) {
      mask = instruction.split(" = ")[1].split("")
      continue
    }

    const re = instruction.match(/mem\[(\d+)\] = (\d+)/)
    const index = parseInt(re[1], 10)
    const value = parseInt(re[2], 10).toString(2).padStart(36, "0")

    mem[index] = value.split("").map((char, ii) => {
      if (mask[ii] == "X") {
        return char
      } else {
        return mask[ii]
      }
    }).join("")
    
    console.log(index, mem[index])
  }

  return mem.reduce((prev, curr) => prev + parseInt(curr, 2), 0)
}

console.log(calculate(input))
