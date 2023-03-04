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

