<template>
  <!-- <div class="quarter-box"> -->
  <div id="quarter"></div>
  <!-- </div> -->
</template>
<script>
import echarts from "echarts";
export default {
  mounted() {
    this.quarter();
  },
  methods: {
    quarter() {
      var quarter = echarts.init(document.getElementById("quarter"));
      var seriesLabel = {
        normal: {
          show: true,
          textBorderColor: "#333",
          textBorderWidth: 2
        }
      };
      let option = {
        title: {
          text: "季度报表"
        },
        grid: {
          // left: "3%",
          // right: "4%",
          // bottom: "3%",
          // containLabel: true
        },
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["product", "销售额", "客户数"],
            ["第一季度", 42360, 8301],
            ["第二季度", 65861, 15236],
            ["第三季度", 72953, 17452],
            ["第四季度", 77621, 21530]
          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {
            type: "bar",
            label: seriesLabel,
            itemStyle: {
              normal: {
                color: "red"
              }
            }
          },
          {
            type: "bar",
            label: seriesLabel,
            itemStyle: {
              normal: {
                color: "#cc9933"
              }
            }
          }
        ]
      };
      window.onresize = function() {
        quarter.resize();
      };
      window.addEventListener("resize", () => {
        quarter.resize();
      });
      quarter.setOption(option);
    }
  }
};
</script>
<style scoped>
#quarter {
  /* background: pink; */
  width: 50%;
  height: 300px;
  margin: 0 20px;
  box-sizing: border-box;
}
@media screen and (max-width: 850px) {
  #quarter {
    width: 100%;
  }
}
</style>
