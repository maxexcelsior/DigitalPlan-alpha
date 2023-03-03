<template>
  <el-container>
    <div class="login-box">
    <form>
        <div class="user-box">
        <label class="label">用户名</label>
        <input type="text" name="" required="">
        </div>
        <div class="user-box">
        <label class="label">密码</label>
        <input type="password" name="" required="">
        </div>
        <router-link to="/home">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          登录
        </router-link>

    </form>
    </div>
  </el-container>

</template>


<style >


.login-box {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(255,255,255,.5);
  box-sizing: border-box;
  /* box-shadow: 0 15px 25px rgba(5,104,157,.6); */

  border: 3px solid transparent;
  border-radius: 10px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(-45deg, #d9eafe, #fff, #d9eafe),
  linear-gradient(-45deg, #3284b1, #cee2ec, #3284b1);
  transition: all 0.3s;
  -webkit-box-reflect: below 20px linear-gradient(transparent, rgba(255, 255, 255, 0.2));
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
  display: block;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 30px;
  border: 1px solid #fff;
  outline: none;
  background: var(--sub-bg-color);
  border-radius: 5px;
}
.login-box .user-box label {
  position: absolute;
  top:-18px;
  left: 0;
  margin: 10px 0; 
  font-size: 15px;
  color: var(--main-bg-color);
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: var(--main-bg-color);
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: var(--main-bg-color);
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px;
  border-radius: 5px;
}

.login-box a:hover {
  background: var(--main-bg-color);
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px var(--main-bg-color),
              0 0 25px var(--main-bg-color),
              0 0 50px var(--main-bg-color),
              0 0 100px var(--main-bg-color);
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--main-bg-color));
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, var(--main-bg-color));
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, var(--main-bg-color));
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, var(--main-bg-color));
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}

</style>