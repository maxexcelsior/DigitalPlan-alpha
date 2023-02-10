<template>
  <el-container >
    <el-aside style="height=100%" width="auto">
        <Menu/>
    </el-aside>
    <el-main>
      <Leaflet/>
    </el-main>        
  </el-container >  
</template>


<script>
// 引入leaflet组件
import Leaflet from '@/components/Leaflet.vue';
import Menu from '@/components/Menu.vue';

export default {
  components: {
    Menu,
    Leaflet,
    },

};

</script>
