<template>
  <div class="common-layout">
    <el-container id="fix-window">
      <el-header>
        <TheNavigation/> 
        <!-- 导航组件的插入位置 -->
      </el-header>
      <el-main>
        <div class="el-container auto-size-box">
          <router-view></router-view>
          <!-- <HomeView/>  -->
        </div>        
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>


<script>
// 引入导航组件
import TheNavigation from '@/components/TheNavigation.vue';
import HomeView from '@/views/HomeView.vue';

export default {
  components: {TheNavigation},

};

</script>