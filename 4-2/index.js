const utils = require('../utils')

const input = utils.readInputAsArray(process.argv[2])

class Passport {
  byr;
  iyr;
  eyr;
  hgt;
  hcl;
  ecl;
  pid;
  cid;
  constructor() {}
  get is_valid() {
    const byr = this.byr && parseInt(this.byr, 10)
    const byr_valid = byr >= 1920 && byr <= 2002

    const iyr = this.iyr && parseInt(this.iyr, 10)
    const iyr_valid = iyr >= 2010 && iyr <= 2020

    const eyr = this.eyr && parseInt(this.eyr, 10)
    const eyr_valid = eyr >= 2020 && eyr <= 2030

    let hgt_valid = false
    if (this.hgt) {
      const re = this.hgt.match(/^(?<size>\d+)(?<unit>\w+)$/)
      const size = parseInt(re.groups.size, 10)

      hgt_valid = (re.groups.unit == "cm" && size >= 150 && size <= 193) || (re.groups.unit == "in" && size >= 59 && size <= 76)
    }

    const hcl_valid = this.hcl && !!this.hcl.match(/#[a-f0-9]{6}/)

    const ecl_valid = this.ecl && 'amb blu brn gry grn hzl oth'.split(' ').includes(this.ecl)

    const pid_valid = this.pid && !!this.pid.match(/^[0-9]{9}$/)

    return byr_valid && iyr_valid && eyr_valid && hgt_valid && hcl_valid && ecl_valid && pid_valid
  }
}

const passports = [new Passport()]
input.forEach(line => {
  if (line == "") {
    passports.push(new Passport())
  } else {
    line.split(" ").forEach(field => {
      [key, value] = field.split(":")
      passports[passports.length - 1][key] = value
    })
  }
})

let valid = 0
passports.forEach(p => {
  console.log(p)
  console.log(p.is_valid)
  if (p.is_valid) {
    valid++
  }
})
console.log(valid)
