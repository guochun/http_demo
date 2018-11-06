const http = require('http');
const fs = require('fs')
const md5 = require('md5')
const zib = require('zlib')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const buffer = fs.readFileSync('./index.html')
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Encoding': 'gzip'
    })
    res.end(zib.gzipSync(buffer))
  } else if(req.url === '/form') {
    const data = req.headers;
    console.log(data)
    res.end('')
  }
})

server.listen(8080, () => {
  console.log('server is running 8080 port');
})