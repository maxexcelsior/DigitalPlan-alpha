<template>
  <router-link to="/" class="tag">
    <div class="grid-content header-container" >
      <img id="dp-logo" src="../assets/拼图.svg" alt="bee" height="40" >
      <div>
        <div style="margin-left:10px; font-size:27px; line-height:27px; color: white; font-style: italic; font-weight: bold;">城市全生命周期管理平台</div>
        <div style="margin-left:10px; margin-top:5px;font-size:10px; line-height:10px; color: white; font-style: italic; font-weight: bold; text-align:left">City Lifecycle Management Platform</div>
      </div>

    </div>
  </router-link> 


  <div id="nav" class="grid-content header-container">
    <router-link to="/home" class="tag">工作台</router-link> 
    <router-link to="/workflow" class="tag">工作流</router-link> 
    <router-link to="/database" class="tag">数据库</router-link>
  </div>

  <div id="user" class="grid-content header-container" style="Justify-content: right;">
    <router-link to="/">
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


<style >
#nav {
  margin-left: auto;  /*auto会自动计算所有可用空间，将指定的方向占满 */
  Justify-content: center;
  align-items: center;
}

#nav a {
  color: #ffffff;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  border-radius: 5px;
}

#nav a:hover {
  background-color: #092e56;
}

#nav .active-link {
  font-weight: bolder;
  border: 1px solid white;

}

.el-header {
  width: 100%;
  height: var(--header-height);
  background-color: var(--main-bg-color);
  display: flex;
  /* position: relative; */
  justify-content:space-between;  /*子元素在父级元素中两端对齐，要有display:flex才能生效 */
  align-items: center;  /* 与父级元素水平中线居中对齐，要有display:flex才能生效 */
}

.header-container {
  display: flex;
  Align-items: center;
  text-align: center;
}

/* #user {
  position: absolute;
  right: 0px;
  top: 0px;
} */

#dp-logo {
  color: #ffffff;
}

#user-circle {
  width: var(--user-logo);
  height: var(--user-logo);
  border-radius: calc(var(--user-logo)/2) ;
  background-color: #ffffff;
}

#user-logo {
  width: var(--user-logo);
}
</style>