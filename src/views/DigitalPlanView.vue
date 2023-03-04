<template>
  <el-container >
    <el-aside style="height=100%" width="auto">
        <Sidebar/>
    </el-aside>
    <el-main>
	  <div class="module-card">
        <router-link to="/home" class="tag">
          <div class="back-btn">
            <el-icon :size="24"><Back /></el-icon>
          </div>            
        </router-link>
        <div class="module-name">数字图则</div>
      </div>       
      <h1>main</h1>
    </el-main>        
  </el-container >  
</template>

<script>
// 引入组件
import Sidebar from '@/components/Sidebar2.vue';

export default {
  components: {
    Sidebar,
    },
};
</script>

<style lang="scss" >
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 240px;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}
body {
	background: var(--light);
}
button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}
.app {
	display: flex;
	main {
		flex: 1 1 0;
		padding: 2rem;
		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>