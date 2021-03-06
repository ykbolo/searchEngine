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
    index: 'search',//索引名
    body: body//索引内容
  })
}
const client = new Client({ node: 'http://127.0.0.1:9200' })
/**
 * @name 综合权重查询
 * @params keywords {String} 搜索关键字
 * @params start {String} 起始位置
 * @params hit {String} 每页的条数
 */
app.post('/default', function (req, res) {
  // const client = new Client({ node: 'http://10.10.48.168:9200' })
  // console.log(req)
  client.search({
    index: 'search',
    body: {
      query: {
        bool: {
          must: {
            match: {
              title: { query: req.body.keywords, boost: 10 }
            }
          },
          should: [
            {
              match: {
                body: { query: req.body.keywords, boost: 1 }
              }
            },
            {
              match: {
                title: { query: req.body.keywords, boost: 5 }
              }
            },
            {
              match: {
                description: { query: req.body.keywords, boost: 3 }
              }
            },
            {
              match: {
                keywords: { query: req.body.keywords, boost: 3 }
              }
            }
          ]
        }
      },
      from: req.body.start,
      size: req.body.hit,
      highlight: {
        fields: {
          body: {
            fragment_size: 15,
            number_of_fragments: 3,
            no_match_size: 10
          },
          title: {
            fragment_size: 15,
            number_of_fragments: 2,
            no_match_size: 10
          },
          description: {
            fragment_size: 15,
            number_of_fragments: 2,
            no_match_size: 10
          }
        }
      }
    }
  }, (err, result) => {
    if (err) {
      console.log('err')
      return res.json('error')
    }
    res.json(result)
  })

})

module.exports = app