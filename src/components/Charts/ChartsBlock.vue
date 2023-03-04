<template>
  <!-- 用v-chart标签来定义一个表格组件 -->
  <v-chart style='height:100%;width:100%;' :option='option' />
</template>

<script>
//这是上面那个v-chart标签包含的内容
  export default {
    name:'myChart',  //name可以自己定，不影响表格显示
    data() {
      return {
        //以下是表格的设置，具体可以参考Echart是的官方文档
        option:{
          tooltip:{},
          legend:{
            data:['销量']
          },
          xAxis:{
            data:['苹果','核桃','香蕉']
          },
          yAxis:{},
          series:[
            {name:'销量',type:'bar',data:[100,200,300]}
          ]
        }
      }
    }
  }
</script>

