<template>
    <div class="register-page">
    <h1 class="title">注册</h1>
    <p v-show="showValidate" class="validate">{{validate}}</p>

    <input type="text" placeholder="用户名" value="username" v-model="username">
    <input type="password" placeholder="密码" value="password" v-model="password">
    <button @click="register">注册</button>
    <div class="other-section">
      <span @click="$router.openPage('/login')">已有账号，马上登录</span>
    </div>
    <p>{{username}} {{password}}</p>
  </div>
</template>

<script>
    export default{
        name:'register',
        data(){
            return{}
        },
        methods:{
            
        }

    }
</script>

<style scoped>
.register-page {
  width: 100%;
  padding: 40px 20px;
}

.title {
  text-align: center;
  font-size: 30px;
  margin-bottom: 50px;
}

.validate {
  font-size: 14px;
  color: #f00;
  text-align: center;
}

input {
  display: block;
  width: 85%;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 15px;
  border: 1px solid #999;
  padding: 10px;
  font-size: 20px;
}

button {
  display: block;
  width: 85%;
  height: 50px;
  line-height: 50px;
  margin: 40px auto;
  background-color: #41b883;
  color: #fff;
  font-size: 18px;
}

.other-section {
  width: 100%;
  display: flex;
}

.other-section span {
  flex: 1;
  text-align: center;
  padding: 10px;
}
</style>