<template>
  <div>
    <div class="menu-box scroll-box-x noscrollbar">
      <ul class="wrap-box clear">
        <li v-for="(item,index) in navList" :class="{'active' : navListActiveIndex==index}" @click="change(index)" :key="index" >
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <div v-show="navListActiveIndex==0" >tab内容1</div>
      <div v-show="navListActiveIndex==1" >tab内容2</div>
      <div v-show="navListActiveIndex==2" >tab内容3</div>
      <div v-show="navListActiveIndex==3" >tab内容4</div>
      <div v-show="navListActiveIndex==4" >tab内容5</div>
      <div v-show="navListActiveIndex==5" >tab内容6</div>
      <div v-show="navListActiveIndex==6" >tab内容7</div>
      <div v-show="navListActiveIndex==7" >tab内容8</div>
      <div v-show="navListActiveIndex==8" >tab内容9</div>
    </div>
  </div>
  
</template>

<script>
  export default{
    data(){
      return {
        navList: [
          {
            name: '推荐'
          },
          {
            name: '手机'
          },
          {
            name: '智能'
          },
          {
            name: '电视'
          },
          {
            name: '电脑'
          },
          {
            name: '全面屏'
          },
          {
            name: '生活周边'
          },
          {
            name: '盒子'
          },
          {
            name: '艺术'
          }
        ],
        navListActiveIndex: 0,
      }
    },
    methods:{
      change(index){
        this.navListActiveIndex = index
      }
    }

  }
</script>

<style>
.scroll-box-x{
  -webkit-overflow-scrolling : touch;
  overflow-x: auto;
}
.wrap-box{width:auto;white-space: nowrap;}
.wrap-box li{display: inline-block;padding: 0 8px;}
.wrap-box li span{display: inline-block;line-height: 60px;position: relative;}

.wrap-box li.active span{color:#f00;}
.wrap-box li.active span:after{
  display: block;
  content: "";
  position: absolute;
  bottom: 0;
  left:0;
  width: 100%;
  height: 3px;
  color:#f00;
}
</style>v