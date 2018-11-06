const http = require('http');
const fs = require('fs')
const md5 = require('md5')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('./index.html', 'utf8')
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'set-cookie': ['id=123; max-age=2', 'name=purcy; HttpOnly']
    })
    res.end(html)
  } 
})

server.listen(8080, () => {
  console.log('server is running 8080 port');
})