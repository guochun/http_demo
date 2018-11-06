const http = require('http');
const url = require('url')

const server = http.createServer((req, res) => {

  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Test-Value, name',
    'Access-Control-Allow-Methods': 'PUT,DELETE',
    'Access-Control-Max-Age': '10000'
  })
  
  res.end('123');
})

server.listen(8081, () => {
  console.log('server is running 8081 port');
})