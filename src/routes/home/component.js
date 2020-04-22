

import service from '../../service/service'
import appResult from './components/app-result'
import Vue from 'vue'
import { Pagination } from 'element-ui'
Vue.use(Pagination)
export default {
  data() {
    return {
      keywords: '贝尔塔',
      time_take: 0,
      start: 0,
      hit: 10,
      list: [],
      hasResult: false,
      total: 0
    }
  },
  components: {
    [appResult.name]: appResult
  },
  mounted() {

  },
  methods: {
    /**
     * @name 点击搜索事件
     */
    submit() {
      this.start = 0
      this.getSearchResult(this.start, this.hit)
    },

    /**
     * @name 获得搜索结果
     * @param {number} start 
     * @param {number} hit 
     */
    getSearchResult(start, hit) {
      service.getSearchResultDefault(this.keywords, start, hit).then((res) => {
        console.log(res)
        this.time_take = res.data.body.took || 'timeout'
        this.total = res.data.body.hits.total.value
        this.list = res.data.body.hits.hits
        this.hasResult = true
      })
      // console.log(this.keywords)
    },
    /**
     * @name 监听分页器改变事件
     * @param {number} val 
     */
    handleCurrentChange(val) {
      console.log(`当前页面${val}`)
      this.start = (val - 1) * this.hit
      console.log(this.start)
      this.getSearchResult(this.start, this.hit)
    }
  }
}