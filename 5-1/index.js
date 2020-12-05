const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2]).filter(i => !!i)

for (let i of input) {
  let row_min = 0
  let row_max = 127
  let col_min = 0
  let col_max = 7

  for (let c of i.split("")) {
    if (c == "F") {
      row_max = row_max - Math.round((row_max - row_min) / 2)
    } else if (c == "B") {
      row_min = row_min + Math.round((row_max - row_min) / 2)
    } else if (c == "L") {
      col_max = col_max - Math.round((col_max - col_min) / 2)
    } else if (c == "R") {
      col_min = col_min + Math.round((col_max - col_min) / 2)
    } else {
      console.log("dunno lol")
    }
  }

  const seat_id = row_min * 8 + col_min
  console.log(seat_id)
}
