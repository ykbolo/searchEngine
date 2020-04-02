

import service from '../../service/service'
import appResult from './components/app-result'
import Vue from 'vue'
import {Pagination} from 'element-ui'
Vue.use(Pagination)
export default {
  data() {
    return {
      keywords: '苏州大学',
      hits:[]
    }
  },
  components: {
    [appResult.name]:appResult
  },
  methods: {
    submit() {
      service.getSearchResult(this.keywords).then((res) => {
        this.hits=res.data.data.body.hits.hits
        for(var i =0;i<res.data.data.body.hits.hits.length;i++) {
          // console.log(res.data.data.body.hits.hits[i]._source)
        }

      })
      console.log(this.keywords)
    }
  },
  mounted() { }
}