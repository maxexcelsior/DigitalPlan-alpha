<template>
     <v-chart style='height:100%;width:100%;' :option='option' />
     、
</template>

<script>
 export default {
   name:'myCharts',
   data() {
     return {
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

