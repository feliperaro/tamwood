const url = require('url');

const myUrl = new URL('http://mywebsite.com')
console.log(myUrl);

myUrl.searchParams.append('abc', '123')

console.log(myUrl);