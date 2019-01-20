// 导入 http 内部模块
const http = require('http')
// 这个核心模块，能够帮我们解析 URL 地址，从而拿到 pathname query
const urlModule = require('url')

// 创建一个 http 服务器
const server = http.createServer()
// 监听 http 服务器的 request 请求
server.on('request',function (req,res) {
    // write your code here ...
    // const url = req.url
    const { pathname : url , query } = urlModule.parse(req.url,true)
    if(url === '/getscript')
    {
        // 拼接一个合法的JS脚本，这里拼接的是一个方法的调用
        // var scriptStr = 'show()'
        var data = {
            name : 'xjj',
            age : 18,
            gender : '女孩子'
        }
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        // res.end 发送给客户端，客户端去把这个字符串，当作JS代码去解析执行
        res.end(scriptStr)
    }
    else
    {
        res.end('404')
    }
})

// 指定端口并启动服务监听
server.listen(3000,function () {
    console.log('server listen at http://127.0.0.1:3000')
})