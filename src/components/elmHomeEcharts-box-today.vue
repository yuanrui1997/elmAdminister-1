<template>
  <div id="today"></div>
</template>
<script>
import echarts from "echarts";
export default {
  mounted() {
    this.today();
  },
  methods: {
    today() {
      let today = echarts.init(document.getElementById("today"));
      let option = {
        title: {
          text: "当日数据"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["当日订单量", "当日营业额"]
        },
        grid: {
          // left: "3%",
          // right: "4%",
          // bottom: "3%",
          // containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
            "00:00",
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "当日订单量",
            data: [
              1000,
              1200,
              800,
              500,
              500,
              400,
              600,
              800,
              900,
              1000,
              1000,
              400,
              300,
              380,
              280,
              200,
              200,
              180,
              100,
              230,
              300,
              600,
              800,
              1100,
              1200
            ],
            type: "line",
            markPoint: {
              data: [{ type: "max", name: "最大值" }]
            },
            itemStyle: {
              normal: {
                color: "#009999",
                lineStyle: {
                  color: "#00ccff"
                }
              }
            }
          },
          {
            name: "当日营业额",
            data: [
              3000,
              3200,
              2800,
              2500,
              2500,
              2400,
              2600,
              2800,
              2900,
              3000,
              3000,
              2400,
              1300,
              1380,
              1280,
              1200,
              1200,
              1180,
              1100,
              1230,
              1300,
              1600,
              2800,
              3100,
              4200
            ],
            type: "line",
            markPoint: {
              data: [{ type: "max", name: "最大值" }]
            },
            itemStyle: {
              normal: {
                color: "#ff0000",
                lineStyle: {
                  color: "#ff0000"
                }
              }
            }
          }
        ]
      };
      window.onresize = function() {
        today.resize();
      };
      window.addEventListener("resize", () => {
        today.resize();
      });
      today.setOption(option);
    }
  }
};
</script>
<style scoped>
#today {
  /* background: yellow; */
  width: 50%;
  height: 300px;
  margin: 0 20px;
  box-sizing: border-box;
}
@media screen and (max-width: 850px){
  #today{
    width:100%;
  }
}
</style>