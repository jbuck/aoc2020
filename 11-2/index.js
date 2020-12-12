const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2]).filter(i => !!i)

let seating = input.map(i => i.split(""))

function areAdjacentSeatsOccupied(seats, y, x) {
  let occupied = 0

  for (let y_mod = -1; y_mod <= 1; y_mod++) {
    for (let x_mod = -1; x_mod <= 1; x_mod++) {
      if (y_mod == 0 && x_mod == 0) {
        continue
      }

      // Check the diagonal I think?
      for (let iterator = 1; iterator < Math.max(seats.length, seats[0].length) + 2; iterator++) {
        const seat = seatOccupied(seats, y + (y_mod * iterator), x + (x_mod * iterator))

        if (seat == "OOB" || seat == "L") {
          break
        } else if (seat == "#") {
          occupied++
          break
        }
      }
    }
  }

  return occupied
}

function seatOccupied(seats, y, x) {
  const answer = !!seats[y] && !!seats[y][x] ? seats[y][x] : "OOB"
  // console.log(y, x, answer)
  return answer
}

function seatPeople(seats) {
  let seats_copy = JSON.parse(JSON.stringify(seats))

  for (let y = 0; y < seats.length; y++) {
    for (let x = 0; x < seats[0].length; x++) {
      let seat = seats[y][x]

      if (seat == ".") {
        // just skip this
        continue
      } else if (seat == "L" && !areAdjacentSeatsOccupied(seats, y, x)) {
        seats_copy[y][x] = "#"
      } else if (seat == "#" && areAdjacentSeatsOccupied(seats, y, x) >= 5) {
        seats_copy[y][x] = "L"
      }
    }
  }

  return seats_copy
}

function printableSeating(seats) {
  return seats.map(i => i.join("")).join("\n")
}

let curr = seating
console.log(printableSeating(curr))
console.log()
while (true) {
  let next = seatPeople(curr)
  
  console.log(printableSeating(next))
  console.log()

  if (printableSeating(curr) == printableSeating(next)) {
    // Count seats
    console.log(printableSeating(next).match(/#/g).length)
    break
  }

  curr = next
}
