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
                type="year"
                placeholder="选择年">
              </el-date-picker>
            </el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          </el-tabs>
        </el-aside>
        <el-main >
            <Cesium/>
        </el-main>        
      </el-container >  

</template>

<script>
import Cesium from '../components/Cesium.vue'

export default {
  components: {Cesium},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-main{
  width: 80%;
  padding: 1px;
}
</style>
