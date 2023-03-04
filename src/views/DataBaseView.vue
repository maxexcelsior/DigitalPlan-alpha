<template>
  <el-container >
    <el-aside style="height=100%" width="auto">
    </el-aside>
    <el-main>
      <myChart/>
    </el-main>        
  </el-container >  
</template>

<script>
// 引入echarts组件
import myChart from '@/components/Charts/ChartsBlock.vue';

export default {
  components: {
    myChart,
    },

};

</script>