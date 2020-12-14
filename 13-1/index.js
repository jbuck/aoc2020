const { time } = require('console')
const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2]).filter(i => !!i)

function calculate(input) {
  const bus_ids = input[1].split(",").map(i => i.replace("x", "1")).map(i => parseInt(i, 10))

  for (let time_iter = 1068774; time_iter < 1068795; time_iter++) {
    let found = true

    for (let array_iter = 0; found && array_iter < bus_ids.length; array_iter++) {
      found = found && Number.isInteger((time_iter + array_iter) / bus_ids[array_iter])
    }

    if (found) {
      return time_iter
    }
  }
  // for (let interval = 0; interval < 100000; interval++) {
  //   let bus_departures = bus_ids.map(bus => (departure_time + interval) / bus)

  //   if (bus_departures.some(b => Number.isInteger(b))) {
  //     return bus_ids[bus_departures.findIndex(b => Number.isInteger(b))] * interval
  //   }
  // }
}

console.log(calculate(input))
