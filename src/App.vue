<template>
  <div id="app">

    <div class="app-shell">
      <router-view></router-view>
    </div>

    <footer :class="{ 'leave': leaveFlag }">
      <div :class="{'active': isActive('home')}" @click="open('/home')">首页</div>
      <div :class="{'active': isActive('classify')}" @click="open('/classify')">分类</div>
      <!-- <router-link to="/test">购物车</router-link> -->
      <div :class="{'active': isActive('cart')}" @click="open('/cart')">购物车</div>
      <div :class="{'active': isActive('mine')}" @click="open('/mine')">我的</div>
      
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      console.log(to)
      console.log(from)
    }
  },
  computed:{
    leaveFlag(){
      var flag = true;
      var base = ['home','classify','cart','mine'];
      for (var i = 0; i < base.length; i++) {
        if(this.isActive(base[i])){
          flag = false;
        }
      }
      // if(this.isActive('cart') ){  //&& this.getShopCarLength > 0 当前页无法获取到购物车长度，需要用vuex管理获取
      //   flag = true;
      // }
      return flag;
    }
  },
  methods:{
    open(target){
      this.$router.push(target)
      console.log("url---",this.$route.path);
    },
    isActive(name){
      return this.$route.path.indexOf(name) != -1
    }
    
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
}

*{padding:0;margin:0;}
.app-shell{width:100%;position: absolute;top: 0;left: 0;right: 0;bottom: 0;}
footer{width:100%;height:60px;line-height: 60px;background-color: #fff;border-top:1px solid #eee;display: flex;position: fixed;bottom: 0;left: 0;z-index:111;transform: translateY(0);}
footer div{width:25%;text-align: center;}
.active{color:#f00;}
.leave{transform: translateY(100%);}

</style>
