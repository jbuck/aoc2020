const fs = require('fs')

exports.readInputAsArray = (filename) => {
  return fs.readFileSync(filename, { encoding: 'utf-8' }).split('\n')
}
