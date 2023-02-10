<template>
  <router-link to="/" class="tag">
    <div class="grid-content header-container" >
      <img id="dp-logo" src="../assets/拼图.svg" alt="bee" height="30" >
      <div style="margin-left:10px; font-size:27px; line-height:27px; color: white; font-style: italic; font-weight: bold;">规建管一体化平台</div>
    </div>
  </router-link> 

  <div id="nav" class="grid-content header-container">
    <router-link to="/home" class="tag">工作台</router-link> 
    <router-link to="/workflow" class="tag">工作流</router-link> 
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

