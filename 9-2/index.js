const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2]).filter(i => !!i).map(i => parseInt(i, 10))

const answer = 138879426
// const answer = 127

function calculateSums(input) {
  let rv = []

  for (let start = 0; start < input.length; start++) {
    let test = 0;
    for (let range = 2; test < answer; range++) {
      test = input.slice(start, range).reduce((prev, curr) => prev + curr, 0)

      // console.log(start, range, test, input.slice(start,range))
      if (test == answer) {
        console.log(input.slice(start, range).sort((a, b) => a - b))
      }
    }
  }

  return rv
}

calculateSums(input)
