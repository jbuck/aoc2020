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

function execute(program) {
  let accumulator = 0, infinite_loop = true, pc = 0

  while (true) {
    const command = program[pc]

    if (!command) {
      infinite_loop = false
      break;
    }
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

  return { accumulator, infinite_loop }
}

let program = input.map(parse)

for (let i = 0; i < program.length; i++) {
  let program_copy = JSON.parse(JSON.stringify(program))
  let results

  if (program_copy[i].instruction == "nop") {
    program_copy[i].instruction = "jmp"
  } else if (program_copy[i].instruction == "jmp") {
    program_copy[i].instruction = "nop"
  } else if (program_copy[i].instruction == "acc") {
    continue;
  }

  results = execute(program_copy)
  if (!results.infinite_loop) {
    console.log(results)
  }
}
