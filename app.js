const http = require('http')
const port = 8080

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('Hello World!')
}).listen()