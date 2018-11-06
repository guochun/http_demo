const http = require('http');
const fs = require('fs')
const md5 = require('md5')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('./index.html', 'utf8')
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Security-Policy': 'default-src http: https:', //只能通过http或者https加载
      'Content-Security-Policy': 'default-src \'self\'',//禁止引入外链的文件
      'Content-Security-Policy': 'default-src \'self\'; form-action \'self\'' //禁止表单跳转到外部链接
    })
    res.end(html)
  }
})

server.listen(8080, () => {
  console.log('server is running 8080 port');
})