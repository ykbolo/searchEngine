export default {
  name: 'app-result',
  props: ['title', 'link', 'body'],
  data() {
    return {
      // title: this.json.highlight.title.join('') || this.json.highlight.keywords.join('') || this.json.highlight.body.join(''),
      // body: this.json.highlight.body.join('')
    }

  },
  mounted() {
    // this.body.splice(0, 100)
  }
}