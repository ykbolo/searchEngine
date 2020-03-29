const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
var compression = require('compression')
const service = require('./es.js')


let port = 8080
app.use(compression());
app.use(express.static('src'));  //加载静态文件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/service', service)
// 服务开启后访问指定编译好的dist文件下的数据
app.use(express.static(path.resolve(__dirname, '../dist')))
app.use(express.static(path.resolve(__dirname, '../public')))
app.get('*', function (req, res) {
  const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
  res.send(html)
})


app.listen(port);
console.log(`success listen at port:${port}......`)