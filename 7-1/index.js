const utils = require('../utils')
const util = require('util')

const input = utils.readInputAsArray(process.argv[2]).filter(i => !!i)

function parseLine(line) {
  const parsed_bag = line.match(/(?<modifier>\w+) (?<colour>\w+) bags contain/)
  const parsed_contains = [...line.matchAll(/(?<count>\d+) (?<modifier>\w+) (?<colour>\w+) bag/g)]

  return {
    modifier: parsed_bag.groups.modifier,
    colour: parsed_bag.groups.colour,
    contains: (parsed_contains || []).map(p => {
      return {
        count: p.groups.count,
        modifier: p.groups.modifier,
        colour: p.groups.colour,
      }
    }),
  }
}

let bags = input.map(parseLine)
const fit = {
  modifier: "shiny",
  colour: "gold",
}

console.log(JSON.stringify(bags))

const testIfFitsInBag = function testIfFitsInBag(bag, fitsInBag) {
  let temp_count = 0
  if (fitsInBag.contains.find(o => o.modifier == bag.modifier && o.colour == bag.colour)) {
    temp_count++
  }
  fitsInBag.contains.some(o => {
    const temp_bag = bags.find(o2 => o.modifier == o2.modifier && o.colour == o2.colour);
    let temp_temp_count = testIfFitsInBag(bag, temp_bag);
    temp_count += temp_temp_count
    return !!temp_temp_count
  })

  return temp_count
}

let count = 0
for (const bag of bags) {
  if (testIfFitsInBag(fit, bag)) {
    count++
  }
}

console.log(count)
