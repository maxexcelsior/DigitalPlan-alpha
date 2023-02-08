<template>
  <router-link to="/" class="tag">
    <div class="grid-content header-container" >
      <img id="dp-logo" src="../assets/拼图.svg" alt="bee" height="30" >
      <div style="margin-left:10px; font-size:27px; line-height:27px; color: white; font-style: italic; font-weight: bold;">规建管一体化平台</div>
    </div>
  </router-link> 

  <div id="nav" class="grid-content header-container">
    <router-link to="/" class="tag">Home</router-link> 
    <router-link to="/onemap" class="tag">一张图</router-link> 
    <router-link to="/digitalplan" class="tag">数字图则</router-link> 
    <router-link to="/sandbox" class="tag">数字沙盘</router-link> 
    <router-link to="/database" class="tag">数据库</router-link>
  </div>

  <div class="grid-content header-container" style="Justify-content: right;">
    <router-link to="/login">
      <div style="display:flex; margin-right:10px; color: white; align-items: center; ">
        <el-icon :size="24"><Setting /></el-icon>
      </div>
    </router-link>
    <router-link to="/account">
      <div id="user-circle">
        <img id="user-logo" src="../assets/bee2.png" alt="bee" > 
      </div>
    </router-link>
  </div>



</template>

<style lang="css">
  #nav .active-link {
    font-weight: bolder;
    border: 1px solid white;

  }

</style>