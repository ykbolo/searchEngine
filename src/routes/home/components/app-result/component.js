export default {
  name: 'app-result',
  props: ['json'],
  data() {
    return {
      title:  this.json.highlight.title.join('') || this.json.highlight.keywords.join('') || this.json.highlight.body.join(''),
      body: this.json.highlight.body.join('')
    }

  },
  mounted() {
    // this.title = this.json.highlight.title.join('') || this.json.highlight.keywords.join('') || this.json.highlight.body.join('')
  
    // this.body = this.json.highlight.body.join('')
  }
}