<template>
  <div>
    <div class="elmhome-title">数据统计</div>
    <div class="data-box">
      <div class="today-box">
        <div class="today-data">
          <span>当日数据</span>
        </div>
        <div class="today-userinfo">
          <span class="num">32</span>新增用户
        </div>
        <div class="today-ourderform">
          <span class="num">15</span>新增订单
        </div>
        <div class="today-adm">
          <span class="num">15</span>新增管理员
        </div>
      </div>
      <div class="all-box">
        <div class="today-data">
          <span>总数据</span>
        </div>
        <div class="today-userinfo">
          <span class="num">23783</span>注册用户
        </div>
        <div class="today-ourderform">
          <span class="num">8968</span>订单
        </div>
        <div class="today-adm">
          <span class="num">36318</span>管理员
        </div>
      </div>
    </div>
    <div>
      <div id="trend"></div>
    </div>
    <div class="small-box">
      <div class="today-box-1">
        <div id="today"></div>
      </div>
      <div class="today-box-1">
        <div id="quarter"></div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  mounted() {
    this.drawLine();
    this.quarter();
    this.today();
  },
  methods: {
    drawLine() {
      let trend = echarts.init(document.getElementById("trend"));
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
    },
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
    },
    quarter() {
      let quarter = echarts.init(document.getElementById("quarter"));
      let seriesLabel = {
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

.today-box {
  display: flex;
}
.today-box div {
  margin: 2px 6px;
  height: 70px;
  line-height: 70px;
}

.elmhome-title{
  font-size: 28px;
  height: 26px;
  line-height: 26px;
}
#trend {
  width: 80%;
  height: 400px;
  margin: 60px auto 20px;
}
.today-adm {
  background: #e5e9f2;
  text-align: center;
  width: 16%;
  border-radius: 6px;
  padding: 4px 0;
}
.today-adm span {
  padding-right: 5px;
  background: #e5e9f2;
}
.num {
  color: #333;
  font-size: 22px;
}
.today-ourderform {
  background: #e5e9f2;
  text-align: center;
  width: 16%;
  border-radius: 6px;
  padding: 4px 0;
}
.today-ourderform span {
  padding-right: 5px;
  background: #e5e9f2;
}
.num {
  color: #333;
  font-size: 22px;
}
.today-data {
  background: #20a0ff;
  text-align: center;
  width: 16%;
  border-radius: 6px;
}
.today-data span {
  font-size: 22px;
  padding: 4px 0;
  color: white;
  display: inline-block;
}
.today-userinfo {
  background: #e5e9f2;
  text-align: center;
  width: 16%;
  border-radius: 6px;
  padding: 4px 0;
}
.today-userinfo span {
  padding-right: 5px;
  background: #e5e9f2;
}
.num {
  color: #333;
  font-size: 22px;
}
.all-box {
  display: flex;
}
.all-box div {
  margin: 2px 6px;
  height: 70px;
  line-height: 70px;
}
.data-box {
  margin: 20px 0 0 40px;
}
.today-adm {
  background: #e5e9f2;
  text-align: center;
  width: 16%;
  border-radius: 6px;
  padding: 4px 0;
}
.today-adm span {
  padding-right: 5px;
  background: #e5e9f2;
}
.num {
  color: #333;
  font-size: 22px;
}
.today-ourderform {
  background: #e5e9f2;
  text-align: center;
  width: 16%;
  border-radius: 6px;
  padding: 4px 0;
}
.today-ourderform span {
  padding-right: 5px;
  background: #e5e9f2;
}
.num {
  color: #333;
  font-size: 22px;
}
.today-data {
  background: #ff9800;
  text-align: center;
  width: 16%;
  border-radius: 6px;
}
.today-data span {
  font-size: 22px;
  padding: 4px 0;
  color: white;
  display: inline-block;
}
.today-userinfo {
  background: #e5e9f2;
  text-align: center;
  width: 16%;
  border-radius: 6px;
  padding: 4px 0;
}
.today-userinfo span {
  padding-right: 5px;
  background: #e5e9f2;
}
.num {
  color: #333;
  font-size: 22px;
}
#quarter {
  /* background: pink; */
  width: 100%;
  height: 300px;
  margin: 0 20px;
  box-sizing: border-box;
}
@media screen and (max-width: 850px) {
  .today-box-1 {
    width: 100% !important;
  }
  .small-box {
    flex-wrap: wrap;
  }
}
.today-box-1 {
  width: 50%;
  box-sizing: border-box;
}
#today {
  /* background: yellow; */
  width: 100%;
  height: 300px;
  margin: 0 20px;
  box-sizing: border-box;
}
.small-box {
  display: flex;
  width: 100%;
  overflow: hidden;
  /* background: pink; */
  justify-content: space-between;
  box-sizing: border-box;
}
</style>
