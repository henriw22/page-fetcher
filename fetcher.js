const input = process.argv.slice(2);
const fs = require('fs')
const request = require('request');

request(input[0], (error, response, body) => {
  if (error) {console.log('error:', error);}; // Print the error if one occurred

  fs.writeFile(input[1], body, { flag: 'w+' }, err => {
    if (err) {
      console.error(err)
      return
    }
    fs.stat(input[1], (error, stats) => {
      if (err) {
        console.log(`File doesn't exist.`);
      } else {
        console.log(`Downloaded and saved ${stats.size} bytes to ${input[1]}`)
      }
    });
    //file written successfully
  });
});


// console.log(input);

const content = 'Some content!'
