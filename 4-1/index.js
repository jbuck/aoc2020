const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2])

const passports = [[]]
for (let i = 0; i < input.length; i++) {
  if (input[i] == "") {
    passports.push([])
  } else {
    passports[passports.length - 1] = passports[passports.length - 1].concat(input[i].split(" "))
  }
}

console.log(passports)

const required = ['byr:', 'iyr:', 'eyr:', 'hgt:', 'hcl:', 'ecl:', 'pid:']
let valid = 0

for (let passport of passports) {
  let isValid = true
  for (let r of required) {
    isValid = isValid && passport.some(s => s.includes(r))
  }

  if (isValid) {
    valid++;
  }
}

console.log(valid)
