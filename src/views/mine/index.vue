<template>
  <div class="mine-page">
    <div class="top-section">
        <!-- 判断cookies里是否有userId 有就跳转到首页，没有跳到登录页 -->
      <div class="avatar" @click="$cookies.get('userId') ? $router.openPage('/') : $router.openPage('/login') ">
        <div class="avatar-img">
          <img src="">
        </div>
        <p class="name">{{avatarName}}</p>
      </div>
    </div>

    <div style="margin-top:40px;text-align:center;">
      <button class="logout" @click="logout">注销</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data() {
    return {
      avatarName:'登录注册'
    }
  },
  methods:{
    checkName(){
      var getUserId = this.$cookies.get("userId")
      if(getUserId){
          this.avatarName = getUserId
      }
    },
    logout(){
      this.$cookies.remove('userId')
      this.$router.go(0); //刷新
    }
  },
  mounted(){
    this.checkName();
  }
}

</script>

<style  scoped>
.top-section{
  width: 100%;
  height: 200px;
  background-color: #ff0;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.avatar{
  display:flex;
  justify-content:space-around;
  align-items: center;
}
.avatar .avatar-img{
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 1px solid #f00;
  background-color: #fff;
  margin-right: 8px;
}
.avatar p{font-size: 16px;}

.logout{padding:10px 20px}
</style>
