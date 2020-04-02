export default {
    name:'app-result',
    props:['json'],
        
    mounted() {
        console.log(this.json)
    }
}