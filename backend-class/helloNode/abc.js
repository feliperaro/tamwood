// const fs = require('fs');
// const path = require('path');

// fs.writeFile('message.txt', 'hello file system', 'utf-8', (err) => {
//     if (err) throw err;
//     console.log('The file has been saved');
// })

// fs.readFile(path.join(__dirname, 'message.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// fs.rename('message.txt', 'message01.txt', (err) => {
//     if (err) throw err;
// })

const def = require('./def')
console.log(def);

const ghi = require('./ghi')
console.log(ghi);