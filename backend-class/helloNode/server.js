const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html', 
    })
    fs.createReadStream('index.html').pipe(res)
    console.log('Client connected');
})

server.listen(8124, () => {
    console.log('Server running in port http://localhost:8124');
})
