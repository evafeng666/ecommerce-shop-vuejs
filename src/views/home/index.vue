<template>
    <div class="home-index">
      <my-swiper :banner-list="bannerList"></my-swiper>
      <menu-box></menu-box><!-- tab切换 -->
      <div class="shop-item clear">
        <img  @click="$router.openPage('/detail')"  class="fl" src="http://qiniu.verydog.cn//show.liluo.cc/2018011114551289342.png">
        <img class="fr" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2ad0dbf777fda097e55cea9ce716e33.jpg?thumb=1&w=358&h=252">
        <img class="fr" src="http://qiniu.verydog.cn//show.liluo.cc/2018011114550596671.png" />

        
      </div>
      
    </div>

</template>

<script>
  import MenuBox from'@/components/menu-box'
  import Swiper from '@/components/swiper'

  export default {
    name: 'home',
    data () {
      return {
        bannerList : []
      }
    },
    watch:{
      $route(){
        this.getBannerList()
      }
    },
    methods:{
      getBannerList(){
        var self = this;
        this.$axios
          .get('/static/data/bannerList.json')
          .then(function(response) {
            console.log(response.data)
            self.bannerList = response.data;
          })
      }
    },
    mounted() {
      this.getBannerList();
    },
    components:{
        'menu-box':MenuBox,
        'my-swiper': Swiper
    }
  } 
</script>

<style>
.shop-item{width:100%;}
.shop-item img{
  width: 49.5%;
  margin-bottom: 2px;
}
.clear{zoom:1;}
.clear:after {
  content: "";
  display: block;
  clear: both;
}
.fr{float: right;}
.fl{float: left;}

.tab-content{width: 100%;padding: 10px;}

::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
}
</style>