const fs = require('fs')

const fileContents = fs.readFileSync('./src/message.txt').toString()
console.log('fileContents', fileContents);