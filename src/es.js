var app = require("express").Router()
const bodyParser = require('body-parser')
// json请求
app.use(bodyParser.json())
// 表单请求
app.use(bodyParser.urlencoded({ extended: false }))
const { Client } = require('@elastic/elasticsearch')
var fs = require("fs");
// 建立连接


// 创建文档
function createDoc(body) {
  console.log(body)
  client.index({
    index: 'sudanews',//索引名
    body: body//索引内容
  })
}


app.post('/test', function (req, res) {
  const client = new Client({ node: 'http://localhost:9200' })
  // console.log(req)
  client.search({
    index:'sudanewsx',
    body: {
      query: {
        match:{"title": req.body.keywords}
      }
    }
  },(err,result)=>{
    if(err){console.log('err') 
    return res.json('error')}
    res.json({
    data: result
  })
  })
  
})

module.exports = app