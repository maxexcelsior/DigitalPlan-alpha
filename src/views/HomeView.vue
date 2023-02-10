<template>
  <el-container id="home">
    
    <router-link class="module"
      v-for="module in modules"
      :key="module.id"  
      :to="module.slug"
    >
      <h2 class="module-title">{{module.name}}</h2>
      <img :src="`/images/${module.image}`" :alt="module.name" class="module-img">
    </router-link>
    <!-- 用数据的id作为唯一的key -->         
  </el-container>
</template>


<script>
import sourceData from '@/data/moduledata.json'
export default {
  data(){
    return {
      modules: sourceData.modules
    }
  }
}
</script>


<style>
  .module {
    position: relative;
    text-align:center;
    margin: 30px;
    padding: 20px;

    border: 3px solid transparent;
    border-radius: 10px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(-45deg, #d9eafe, #fff, #d9eafe),
    linear-gradient(-45deg, #3284b1, #cee2ec, #3284b1);
    transition: all 0.3s;
    -webkit-box-reflect: below 20px linear-gradient(transparent, rgba(255, 255, 255, 0.2));
  }

  .module:hover {
    
    box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);/* 鼠标悬浮时盒子出现的阴影 */
    transform: translate(0, -20px);/* 鼠标悬浮时盒子上移 */  
    
  }
  .module-title{
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    /* 按top和left偏移后，又根据自身尺寸偏移-50% */  


    font-style: italic;
    font-weight: bold;
    font-size: 35px;

    background-image: linear-gradient(45deg, #01224B, #05699D);
    background-clip: text;
    color: transparent;

    
  }

.module-img{
  padding: 20px;
  width: 150px;
}
 
</style>
