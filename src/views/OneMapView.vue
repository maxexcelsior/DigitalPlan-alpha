<template>
  <el-container >
    <el-aside style="height=100%" width="auto">
        <Menu/>
    </el-aside>
    <el-main>
      <div class="module-card">
        <router-link to="/home" class="tag">
          <div class="back-btn">
            <el-icon :size="24"><Back /></el-icon>
          </div>            
        </router-link>
        <div class="module-name">一张图</div>
      </div>            
      <ArcGisMap/>
      <!-- <Leaflet/> -->
    </el-main>        
  </el-container >  
</template>


<script>
// 引入leaflet组件
import Leaflet from '@/components/Leaflet.vue';
import ArcGisMap from '@/components/ArcGisMap.vue';
import Menu from '@/components/Menu.vue';

export default {
  components: {
    Menu,
    ArcGisMap,
    },

};

</script>

