<template>
  <el-container >
    <el-aside width="20%">
      <el-tabs type="border-card">
        <el-tab-pane >
          <template #label>
            <span><i class="el-icon-date"></i> 图层</span>
          </template>
          图层
        </el-tab-pane>
        <el-tab-pane >
          <template #label>
            <span><i class="el-icon-date"></i> 时间</span>
          </template>
          <el-date-picker
            v-model="value3"
            type="year"
            placeholder="选择年">
          </el-date-picker>
        </el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      </el-tabs>
    </el-aside>
    <el-main>
        <Leaflet/>
    </el-main>        
  </el-container >  
  
</template>

<script>
// 引入导航组件
import Leaflet from '@/components/Leaflet.vue';


export default {
  components: {Leaflet},

};

</script>