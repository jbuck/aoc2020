const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2]).filter(i => !!i)

function generateAddresses(address) {
  const index = address.indexOf("X")
  
  if (index == -1) {
    return [address]
  }

  const zero = address.replace("X", "0")
  const zero_next = generateAddresses(zero)
  const one = address.replace("X", "1")
  const one_next = generateAddresses(one)

  return [zero_next, one_next].flat(1)
}

function calculate(input) {
  let mask = "", mem = {}
  for (let instruction of input) {
    if (instruction.startsWith("mask")) {
      mask = instruction.split(" = ")[1].split("")
      continue
    }

    const re = instruction.match(/mem\[(\d+)\] = (\d+)/)
    const index = parseInt(re[1], 10).toString(2).padStart(36, "0")
    const value = parseInt(re[2], 10)

    const new_index = index.split("").map((char, ii) => {
      if (mask[ii] == "0") {
        return char
      } else {
        return mask[ii]
      }
    }).join("")
    
    generateAddresses(new_index).forEach(ni => {
      mem[parseInt(ni, 2)] = value
    })

    console.log("Address: ", index)
    console.log("Mask:    ", mask.join(""))
    console.log("Result:  ", new_index)
  }

  return Object.keys(mem).reduce((prev, curr) => {
    return prev + mem[curr]
  }, 0)
}

console.log(calculate(input))
