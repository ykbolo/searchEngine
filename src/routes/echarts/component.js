import echarts from 'echarts'
export default {
  name: 'myEchart',
  data() {
    return {
      ydata: []
    }
  },
  mounted() {

    this.ydata = [{ value: 335, name: '直接访问' },
    { value: 310, name: '邮件营销' },
    { value: 234, name: '联盟广告' },
    { value: 135, name: '视频广告' },
    { value: 1548, name: '搜索引擎' }]
    this.draw()
    setTimeout(() => {
      this.ydata = [{ value: 5, name: '直接访问' },
      { value: 33, name: '邮件营销' },
      { value: 234, name: '联盟广告' },
      { value: 12, name: '视频广告' },
      { value: 1548, name: '搜索引擎' }]
      this.draw()
    }, 3000)

  },
  methods: {
    draw() {
      var myEchart = echarts.init(document.getElementById('ec'));
      // 绘制图表
      myEchart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: this.ydata
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: this.ydata
          }
        ]
      });
    }
  }
}