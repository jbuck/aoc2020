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
        count: parseInt(p.groups.count, 10),
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

function countBagsIn(bag) {
  let count = bag.contains.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0)
  
  bag.contains.forEach(b => {
    const new_bag = bags.find(o => o.modifier == b.modifier && o.colour == b.colour)
    count += b.count * countBagsIn(new_bag)
  })

  return count
}

const bag = bags.find(o => o.modifier == fit.modifier && o.colour == fit.colour)
console.log(countBagsIn(bag))
