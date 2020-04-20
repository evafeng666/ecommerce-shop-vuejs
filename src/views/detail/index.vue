<template>
  <div class="detail-page"> 
    <div class="banner-wrap">
      <my-swiper :banner-list="info.banner"></my-swiper>
    </div>
    <div class="app-container">
      <div class="title-box">
        <h3>{{ info.title }}</h3>
        <p style="color:#ff4a00">{{ info.bigContent }}</p>
        <p style="color: #757575"> {{ info.smallContent }} </p>

        <div class="press">
          <span class="money" v-if="info.money">￥{{ info.money }}</span>
          <span class="no-money" v-if="info.noMoney">￥{{ info.noMoney }}</span>
          <span class="tips" v-for="(target, index) in info.tips" :key="index">{{ target }}</span>
        </div>
      </div>

      <div class="touch-item-box">
          <div class="touch-item">
            <span class="key">已选</span>
            {{ info.chouse }}
          </div>
          <div class="touch-item">
            <span class="key">送至</span>
            <span v-for="(target, index) in info.address" :key="index">{{ target }}</span>
          </div>
        </div>

        <div class="touch-item-box">
          <div class="touch-item">
            <span class="key">配件</span>
          </div>
        </div>

        <div class="p-box">
          <!-- vue文件中将需要懒加载的图片 :src="" 修改为 v-lazy=""   key=target 是解决动态更新图片-->
          <img v-for="(target, index) in info.pBox" :key="target" v-lazy="target" />
        </div>
        
        <div class="detail-footer">
          <div class="left-box">
            <div class="item" @click="$router.openPage('/')">
              <p>
                <span class="iconfont icon-shouye"></span>
              </p>
              <p class="name">首页</p>
            </div>
            <div class="item cursom-shopcar" @click="$router.openPage('/cart')">
              <p>
                <span class="iconfont icon-gouwuche"></span>
              </p>
              <p class="name">购物车</p>
              <span class="num" v-show="getCartListLength >0">{{getCartListLength}}</span>
              <!-- <span class="num" v-show="getShopCarLength > 0" :class="{ 'full': parseInt(getShopCarLength) >= 99 }">{{ parseInt(getShopCarLength) >= 99 ? '99+' : getShopCarLength }}</span> -->
            </div>
          </div>
          <div class="right-box" @click="addProduct">
            加入购物车
            <span class="bool bool-animate" ref="bool"></span>
          </div>
        </div>

    </div>
     
  </div> 
</template>

<script>
import Swiper from '@/components/swiper' 

export default {
  name: 'detail',
  data() {
    return {
      getCartListLength:2,
      info:{},
      cartList:[{
        src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        price: 5199.08,
        amount: 1,
        href: '/detail/1006'
      },
      {
        src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
        title: '小米 5s',
        price: 1999.15,
        amount: 1,
        href: '/detail/1019'
      }]
    }
  },
  watch:{
    $route() {
    console.log(this.$route);
    }

  },
  computed:{
    // getCartListLength(){
    //   console.log(this.cartList)
    //   var n =0;
    //   n += this.cartList.length
    //   return n
    // }
  },
  methods: {
    init(){
      // var id = this.$route.query.id;
      //  console.log(id)
      // if(!id){
      //   this.$router.replace('/error/404')
      // }
      var that = this
      this.$axios
        .get('/static/data/'+1019+'.json')
        .then(function(response) {
          console.log(response)
          that.info = response.data
        })
    },
    addProduct(){
      console.log(this.getCartListLength)
      return this.getCartListLength+=1
    }
  },
  mounted() {
    this.init()
    
  },
  components:{
    'my-swiper':Swiper
  }
} 
</script>

<style scoped>
body{background-color: #ebebeb;}
.title-box{
  background-color: #fff;
  margin-bottom: 5px;
  padding: 5px 10px;
  font-size: 14px;
}
.title-box h3{
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  color:#333;
}
.title-box p{
  padding-top: 5px;
}
.title-box .press{
  padding-top: 10px;
}
.title-box .press .money{
  color: #ff6700;
  font-size: 20px;
  font-weight: 700;
}
.title-box .press .no-money{
  margin-left: 8px;
  color: rgba(0,0,0,.54);
  text-decoration: line-through;
}
.title-box .press .tips{
  display: inline-block;
  padding: 5px;
  color:#fff;
  font-size: 12px;
  background-color: #ff6700;
  margin-left: 5px;
  border-radius: 2px;
  position: relative;
}
.touch-item-box{
  margin-bottom: 6px;
}
.touch-item-box .touch-item{
  background-color: #fff;
  color: rgba(0,0,0,.87);
  line-height: 40px;
  position: relative;
  border-bottom: 1px solid #d9d9d9;
  padding: 0 10px;
  font-size: 16px;
}
.touch-item-box .touch-item:after {
  font-family: iconfont;
  content: "\E628";
  position: absolute;
  right: 10px;
  color: #3e3e3e;
}

.p-box{padding-bottom: 70px;}

.detail-footer{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
.left-box, .right-box{width: 50%;height: 60px;}
.left-box{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.left-box .item{
  display: flex;
  flex-direction:column;
  align-items: center;
  position: relative;
}
.left-box .item .num{
  min-width: 10px;
  min-height: 10px;
  padding: 2px 6px;
  border-radius: 100%;
  background-color: #f00;
  color:#fff;
  font-size: 12px;
  position: absolute;
  top:0;
  right: -5px;
}
.right-box{
  background-color: #ff6700;
  color:#fff;
  text-align: center;
  line-height: 60px;
}

.right-box .bool{
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #f00;
  border-radius: 100%;
  position: absolute;
  top:50%;
  display: none;

}
</style>

