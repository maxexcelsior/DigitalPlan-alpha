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
          <div class="main-item bg-purple-light">
            <CesiumView msg="Welcome to Your Vue.js App"/>
          </div>
        </el-main>        
      </el-container >  

</template>

<script>
// import CesiumView from './components/CesiumView.vue'

// export default {
//   name: 'App',
//   components: {
//     CesiumView
//   },

//   data() {
//     return {
//       value: new Date()
//     }
//   },
  
// }
</script>

<style>



.el-aside{
  padding: 0px;
  border: 1px solid white;
}

.el-row {
  margin-bottom: 0px;
  height: 100%;

}
.el-col {
  height: 100%;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}


.el-menu-item{
  height: 100% !important;
  line-height: var(--header-height) !important;
  
}

.el-submenu__title{
  height: 100% !important;
  line-height: var(--header-height) !important;
  border-bottom: 0px !important;
}

.user-logo{
  z-index: 9999;
  line-height: var(--header-height) ;
}
.main-item{
  height: 100%;
}
.aside-top-item{
  height: 100% - var(--header-height);
}
.aside-bottom-item{
  height: var(--footer-height) !important;
}

.el-tabs__item{
  font-size: 10px;
  line-height: 20px;
}
.el-tabs__item, .el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:nth-child(2), .el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child{
  padding: 10px;
}


/* cesium隐藏元素控制 */
.cesium-viewer-bottom{
  display: none !important;
}
</style>
