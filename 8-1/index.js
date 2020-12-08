const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2]).filter(i => !!i)

function parse(line) {
  const re = line.match(/(\w+) (.)(\d+)/)
  return {
    instruction: re[1],
    sign: re[2],
    value: re[3],
  }
}

let program = input.map(parse)
let accumulator = 0, pc = 0

while (true) {
  const command = program[pc]

  // console.log(program)
  // console.log(accumulator)
  if (command.visited) {
    break;
  }
  command.visited = true

  if (command.instruction == "nop") {
    pc++
  } else if (command.instruction == "acc") {
    accumulator += +(command.sign + command.value)
    pc++
  } else if (command.instruction == "jmp") {
    pc += +(command.sign + command.value)
  }
}

console.log(accumulator)
