<template>
  <el-container id="home">
    <TheLogin/>    
  </el-container>
    
</template>

<script>
// 引入导航组件
import TheLogin from '@/components/TheLogin.vue';


export default {
  components: {TheLogin},

};

</script>