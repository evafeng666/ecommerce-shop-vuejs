<template>
  <div class="login-page">
    <h1 class="title">登录</h1>
    <p v-show="showValidate" class="validate">{{validate}}</p>
    <input type="text" placeholder="用户名" value="username" v-model="username">
    <input type="password" placeholder="密码" value="password" v-model="password">
    <button @click="login">登录</button>
    <div class="other-section">
      <span @click="$router.openPage('/register')">没有账号，马上注册</span>
    </div>
    <p>{{username}} {{password}}</p>
    
    <p>{{test}}</p>

  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      validate: '',
      showValidate: false,
      test:''
    }
  },
  methods: {
    login() {
      // if (this.username === '' || this.password === '') {
      //   showValidate = true;
      //   this.validate = '用户名或密码不能为空';
      //   return false;
      // }
      let loginData = {
        username: this.username,
        password: this.password
      }
      
      // var that = this
      //then()使用ES6箭头函数 就不会出现this指向错误，在外面另外定义that了；
      this.$axios.post('/api/User/login',loginData)
        .then((response)=>{
          console.log(response);
          if(response.status === 200){
            console.log('登录成功')
            this.showValidate = true
            this.validate = '登录成功'
            this.$cookies.set("userId",response.data,"1d")
            // this.$router.push('/home')
            //setTimeout的this指向是window,在这里要利用bind()来绑定到当前函数上来。要不然会报错
            setTimeout(function(){
              this.$router.push('/home')
            }.bind(this),1000)
          }
        })
        .catch(function(error) {
          console.log(error);
        });

    }
  }

}

</script>
<style scoped>
.login-page {
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
