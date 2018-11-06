# 1：CROS

```
浏览器跨域请求, 
服务端可以正常处理数据返回数据  
浏览器接收数据的时候判别响应头是否有允许跨域的字段来采取同源政策。

Access-Control-Allow-origin
允许跨域请求的url

Access-Control-Allow-Headers
允许跨域请求的请求头部字段

Access-Control-Allow-Methods
允许跨域请求的方法 只支持GET POST HEADE 方法,其他的方法跨域请求要设置

Access-Control-Max-Age
设置跨域请求的过期时间 将在此时间内不会发生预请求

```
#2: Cache-Control

```
可缓存性
public
表示http经过的任何节点都可以缓存包括代理服务器
客户端浏览器
private
表示只有发起请求的客户端浏览器才可以缓存
no-cache
可以使用缓存但是每次都需要服务器的验证是否可以缓存

到期
max-age=<seconds>
//指定缓存经过多长时间过期
s-maxage=<seconds>
代理服务器生效如果同时设置max-age 和 s-maxage
代理服务器以s-maxage为主

max-stale=<seconds>
客户端携带的请求头表示即使缓存已经过期但是在
max-stale也会使用过期的缓存。
在浏览器中无效

重新验证
must-revalidate
表示缓存过期必须重新验证
proxy-revalidate
表示缓存服务器过期必须验证

其他
no-store
表示代理服务器和客户端不可以缓存
no-transform
告诉代理服务器不要改动返回的内容
```
# 3: 资源验证

```
验证头
Last-Modified
上次修改时间给资源设置上一次的更改时间
配合If-Modified-Since 或者 If-Unmodified-Since
使用
当服务器设置Last-Modified的响应头之后
每回客户端请求同样的资源都会带上
If-Modified-Since的请求头
服务器可以读取If-Modified-Since和Last-Modified
对比确定是否可以使用缓存
对比上次修改的时间来验证资源是否需要更新。

Etag
通过数据签名
对一个资源的数据产生唯一的一个签名来用这个签名标记这个资源
下一次浏览器请求资源的时候携带
If-Match 或者 If-Non-Match
来对比资源的数据签名是否需要缓存
```
4：cookie & session

```
Cookie
通过服务器Set-Cookie设置作为响应头返回,浏览器每次(限制在同域中)请求就会携带Cookie的内容。

cookie属性
max-age和expires设置过期时间
Secure只在https的时候发送
HttpOnly无法通过document.cookie访问

```
5: 数据协商

请求
```
Accept
表示客户端想要的数据类型
Accept-Encoding
表示客户端期待的数据编码格式
Accept-Language
表示客户端期待的语言
User-Agent
表示客户端用户代理
```
响应

```
Content-Type
服务端实际返回的数据类型
Content-Encoding
服务端实际返回的数据编码格式
Content-Language
服务端实际返回的语言

X-Content-Type-Option nosniff
表示浏览器不会预测返回的内容
```
6：CSP


```
Content-Security-Policy
内容安全策略
作用
限制资源获取
报告资源获取越权
default-src限制全局
制定资源类型
```

```
资源类型

connect-src
img-src
font-src
frame-src
media-src
script-src
style-src
manifest-src
```

```
 'Content-Security-Policy': 'default-src http: https:', //只能通过http或者https加载
 'Content-Security-Policy': 'default-src \'self\'' //禁止引入外链的文件
 'Content-Security-Policy': 'default-src \'self\''; form-action \'self\'' //禁止表单跳转到外部链接
 
```
