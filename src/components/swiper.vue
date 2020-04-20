<template>
  <!-- 添加v-if条件可以解决循环轮播不生效的情况 v-if="bannerList.length>1" -->
  <swiper  :options="swiperOption">
    <swiper-slide class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
      <img :src="item.src"/>
    </swiper-slide>
    <!-- 分页器 -->
    <div class="swiper-pagination"  slot="pagination"></div>   
    <!-- 左右箭头 --> 
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> 
    <div class="swiper-button-next" slot="button-next"></div>  -->
  </swiper>
</template>
<script>
  export default {
    props: {
      bannerList: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data(){
      return {
        swiperOption:{
          //显示分页
          pagination: {
            el: '.swiper-pagination'
          },
          //设置点击箭头
          // navigation: {
          //   nextEl: '.swiper-button-next', 
          //   prevEl: '.swiper-button-prev'
          // },
          //自动轮播
          autoplay: {
            delay: 2000,
            //当用户滑动图片后继续自动轮播
            disableOnInteraction: false
          },
          //开启循环模式
          loop: true
        }
      }
    }
    
  }

</script>
<style>
  .swiper-container img {width: 100%}
</style>
