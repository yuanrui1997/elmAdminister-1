<template>
  <div id="trend"></div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var trend = echarts.init(document.getElementById("trend"));
      let option = {
        title: {
          text: "走势图"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["新增用户", "新增订单", "新增管理员"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "8%",
          containLabel: true
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2019-4-5",
            "2019-4-6",
            "2019-4-7",
            "2019-4-8",
            "2019-4-9",
            "2019-4-10",
            "2019-4-11",
            "2019-4-12",
            "2019-4-13",
            "2019-4-14",
            "2019-4-15",
            "2019-4-16"
          ]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} °C"
          }
        },
        series: [
          {
            name: "新增用户",
            type: "line",
            data: [30, 20, 25, 23, 35, 20, 36, 40, 38, 42, 36, 38],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          },
          {
            name: "新增订单",
            type: "line",
            data: [50, 60, 70, 65, 63, 70, 72, 71, 70, 72, 65, 63],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          },
          {
            name: "新增管理员",
            type: "line",
            data: [10, 15, 20, 13, 11, 13, 15, 16, 15, 11, 12, 13],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          }
        ]
      };
      window.onresize = function() {
        trend.resize();
      };
      window.addEventListener("resize", () => {
        trend.resize();
      });
      trend.setOption(option);
    }
  }
};
</script>
<style scoped>
#trend {
  width: 80%;
  height: 400px;
  margin: 60px auto 20px;
}
</style>