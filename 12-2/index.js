const { SIGHUP } = require('constants')
const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2]).filter(i => !!i)

const signLookup = {
  
}

function moveShip(input) {
  let waypoint = {
    x: 10,
    y: -1,
  }

  let ship = {
    x: 0,
    y: 0,
  }

  for (const instruction of input) {
    const command = instruction.slice(0, 1)
    const value = parseInt(instruction.slice(1), 10)

    console.log(ship.x, ship.y, waypoint.x, waypoint.y)
    console.log(command, value)

    if        (command == "F") {
      ship.x += waypoint.x * value
      ship.y += waypoint.y * value
    } else if (command == "N") {
      waypoint.y -= value
    } else if (command == "E") {
      waypoint.x += value
    } else if (command == "S") {
      waypoint.y += value
    } else if (command == "W") {
      waypoint.x -= value
    } else if (command == "R" || command == "L") {
      for (let iterations = 0; iterations < value / 90; iterations++) {
        let x_value = waypoint.y
        let y_value = waypoint.x

        if (command == "R") {
          waypoint.x = -x_value
          waypoint.y = y_value
        } else if (command == "L") {
          waypoint.x = x_value
          waypoint.y = -y_value
        }
      }
    }

    console.log(ship.x, ship.y, waypoint.x, waypoint.y)
  }

  return Math.abs(ship.x) + Math.abs(ship.y)
}

console.log(moveShip(input))
