var app = require("express").Router()
const bodyParser = require('body-parser')
// json请求
app.use(bodyParser.json())
// 表单请求
app.use(bodyParser.urlencoded({ extended: false }))
const { Client } = require('@elastic/elasticsearch')
var fs = require("fs");
// 建立连接
const client = new Client({ node: 'http://localhost:9200' })

// 创建文档
function createDoc(body) {
  console.log(body)
  client.index({
    index: 'sudanews',//索引名
    body: body//索引内容
  })
}
// 读取json文档
const readIndexFile = (count) => {
  // 异步读取
  fs.readFile(`f://txt2json/index${count}.json`, function (err, data) {
    if (err) {
      return console.error(err);
    }

    console.log("异步读取: " + data);
    createDoc(data)
  });
}
// 以100个文档为例，自动化
function autoRun() {
  var count = 1
  for (count; count <= 100; count++) {
    readIndexFile(count)
  }
}
// // 执行
// autoRun()

app.post('/test', function (req, res) {
  console.log(req)
  res.json({
    list: ['1', '2', '3']
  })
})

module.exports = app