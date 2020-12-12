const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2]).filter(i => !!i)

const directionLookup = {
  E: {
    L90: "N",
    L180: "W",
    L270: "S",
    R90: "S",
    R180: "W",
    R270: "N",
  },
  S: {
    L90: "E",
    L180: "N",
    L270: "W",
    R90: "W",
    R180: "N",
    R270: "E",
  },
  W: {
    L90: "S",
    L180: "E",
    L270: "N",
    R90: "N",
    R180: "E",
    R270: "S",
  },
  N: {
    L90: "W",
    L180: "S",
    L270: "E",
    R90: "E",
    R180: "S",
    R270: "W",
  },
}

function moveShip(input) {
  let ship = {
    direction: "E",
    x: 0,
    y: 0,
  }

  for (const instruction of input) {
    const command = instruction.slice(0, 1)
    const value = parseInt(instruction.slice(1), 10)

    console.log(command, value)
    console.log(ship.x, ship.y, ship.direction)

    if        ((command == "F" && ship.direction == "E") || command == "E") {
      ship.x += value
    } else if ((command == "F" && ship.direction == "S") || command == "S") {
      ship.y += value
    } else if ((command == "F" && ship.direction == "W") || command == "W") {
      ship.x -= value
    } else if ((command == "F" && ship.direction == "N") || command == "N") {
      ship.y -= value
    } else if (command == "L" || command == "R") {
      ship.direction = directionLookup[ship.direction][instruction]
    } else if (command == "E") {
      ship.x
    }

    console.log(ship.x, ship.y, ship.direction)
  }

  return Math.abs(ship.x) + Math.abs(ship.y)
}

console.log(moveShip(input))
