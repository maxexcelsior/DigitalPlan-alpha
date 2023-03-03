<template>
  <el-container >
    <el-aside style="height=100%" width="auto">

    </el-aside>
    <el-main>
      <ChartsBlock/>
    </el-main>        
  </el-container >  
</template>

<script>
// 引入echarts组件
import ChartsBlock from '@/components/Charts/ChartsBlock.vue';

export default {
  components: {
    ChartsBlock,
    },

};

</script>