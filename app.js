const http = require('http')
const port = 8080

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.send({
    message: 'Hello World!'
  })
}).listen(port, () => {
  console.log(`Server listenin at PORT=${port}`)
})