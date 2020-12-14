const bignum = require("bignum")
const crt = require("nodejs-chinese-remainder")
const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2]).filter(i => !!i)

function calculate(input) {
  const bus_ids = input[1].split(",").filter(i => i != "x").map(i => bignum(i))
  const mod_ids = bus_ids.map(i => {
    const index = input[1].split(",").indexOf(i.toString())

    if (index == 0) {
      return bignum(index)
    } else {
      return bignum(i).sub(index)
    }

    
  })

  console.log(bus_ids.map(i => i.toString()))
  console.log(mod_ids.map(i => i.toString()))

  return crt(mod_ids, bus_ids)
}

console.log(calculate(input).toString())
