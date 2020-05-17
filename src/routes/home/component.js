

import service from '../../service/service'
import appResult from './components/app-result'
import Vue from 'vue'
import { Pagination } from 'element-ui'
Vue.use(Pagination)
export default {
  data() {
    return {
      keywords: '',
      time_take: 0,
      start: 0,
      hit: 10,
      list: [],
      hasResult: false,
      total: 0,
      totalText: this.total < 1000 ? this.total : "999+"
    }
  },
  components: {
    [appResult.name]: appResult
  },
  mounted() {
    console.log(this.$__env__)
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
        this.time_take = res.data.body.took || 'timeout'//耗时
        this.total = res.data.body.hits.total.value//总数
        this.totalText = +this.total < 1000 ? this.total : "999+"//总数显示
        this.list = res.data.body.hits.hits//搜索结果列表
        this.hasResult = true//是否有搜索结果
      })
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