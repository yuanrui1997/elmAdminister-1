
<template>
  <div class="backG">
      <div class="backG_T">
          <div class="yongH_L">
              <h3>用户分布</h3>
              <div id="main"></div>
          </div>
          <div class="yongH_R">
            <h3>用户分布</h3>
            <div id="main_1"></div>
          </div>
      </div>
      <div class="backG_T">
        <div class="yongH_L">
          <h3>用户分布</h3>
          <div id="main_2"></div>
        </div>
        <div class="yongH_R">
          <h3>用户分布</h3>
          <div id="main_3"></div>
        </div>
      </div>
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  mounted () {
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
      title : {
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['北京','上海','深圳','杭州','其他']
      },
      series : [
        {
          name:'访问来源',
          type:'pie',
          radius:'55%',
          center: ['50%', '60%'],
          data: [
            {value: 335, name: '北京'},
            {value: 310, name: '上海'},
            {value: 234, name: '深圳'},
            {value: 135, name: '杭州'},
            {value: 1548, name: '其他'}
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    myChart.setOption(option)

    var myChart = echarts.init(document.getElementById('main_1'));
    var data = [];

    for (var i = 0; i <= 100; i++) {
      var theta = i / 100 * 360;
      var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
      data.push([r, theta]);
    }

    var option = {
      title: {
      },
      legend: {
        data: ['line']
      },
      polar: {},
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      angleAxis: {
        type: 'value',
        startAngle: 0
      },
      radiusAxis: {
      },
      series: [{
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
        data: data
      }]
    };
    myChart.setOption(option)

    var myChart = echarts.init(document.getElementById('main_2'));

    option = {
      angleAxis: {
      },
      radiusAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四'],
        z: 10
      },
      polar: {
      },
      series: [{
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
      }, {
        type: 'bar',
        data: [2, 4, 6, 8],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
      }, {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
      }],
      legend: {
        show: true,
        data: ['A', 'B', 'C']
      }
    };

    myChart.setOption(option)

    var myChart = echarts.init(document.getElementById('main_3'));

    var option = {
      angleAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        z: 10
      },
      radiusAxis: {
      },
      polar: {
      },
      series: [{
        type: 'bar',
        data: [1, 2, 3, 4, 3, 5, 1],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
      }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
      }, {
        type: 'bar',
        data: [1, 2, 3, 4, 1, 2, 5],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
      }],
      legend: {
        show: true,
        data: ['A', 'B', 'C']
      }
    };
    myChart.setOption(option)
  }
}
</script>

<style scoped>

  .backG{
    width: 100%;
    height: 723px;
    overflow: hidden;
  }
  .backG_T{
    height: 45%;
  }
  .yongH_L{
    width: 49%;
    height: 100%;
    float: left;
    border: 1px solid #e5e5e5;
    background: #FFF;
    margin-bottom: 10px;
    position: relative;
  }
  .yongH_R{
    width: 49%;
    height: 100%;
    float: right;
    border: 1px solid #e5e5e5;
    background: #FFF;
    margin-bottom: 10px;
    position: relative;
  }
  .backG_T h3{
    border-bottom: 1px solid #e5e5e5;
    font-weight: 100;
    background: #e5e5e5;
  }
  #main{
    width: 100%;
    height: 80%;
    margin-top:20px;
  }
  #main_1{
    width: 100%;
    height: 80%;
    margin-top:20px;
  }
  #main_2{
    width: 100%;
    height: 80%;
    margin-top:20px;
  }
  #main_3{
    width: 100%;
    height: 80%;
    margin-top:20px;
  }
</style>
