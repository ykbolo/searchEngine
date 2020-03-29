

import service from '../../service/service'
export default {
  data() {
    return {
      keywords: ''
    }
  },
  components: {
  },
  methods: {
    submit() {
      service.getSearchResult(this.keywords).then((res) => {
        console.log(res)
      })
      console.log(this.keywords)
    }
  },
  mounted() { }
}