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
      <el-footer>
        <div class="footer-info">©Digital Plan</div>
        <div class="footer-info">华南理工大学建筑学院</div>
        <!-- <div class="footer-info">硕士研究生学位论文</div>
        <div class="footer-info">面向精细化开发与适应性管控的数字图则研究</div>
        <div class="footer-info">陈铭熙</div>
        <div class="footer-info">202020104792</div>
        <div class="footer-info">指导老师：费彦</div> -->
      </el-footer>
    </el-container>
  </div>
</template>


<script>
// 引入导航组件
import TheNavigation from '@/components/TheNavigation.vue';

export default {
  components: {TheNavigation},

};

</script>