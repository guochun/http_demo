const http = require('http');
const fs = require('fs')
const md5 = require('md5')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('./test.html', 'utf8')
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end(html)
  } else if (req.url === '/main.js') {

    const content = 'console.log("cache1")';
    const screct = md5(content);
    const ifNoneMatch = req.headers['if-none-match'];
    if (ifNoneMatch !== null && ifNoneMatch === screct) {
      res.writeHead(304, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=200000, no-cache',
        'Last-Modified': '11',
        'Etag': screct
      })
      res.end()
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=200000, no-cache',
        'Last-Modified': '11',
        'Etag': screct
      })
      res.end(content)
    }

  }

})

server.listen(8080, () => {
  console.log('server is running 8080 port');
})