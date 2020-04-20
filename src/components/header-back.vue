<template>
  <div class="header-back">
    <span class="iconfont icon-backer myicon lf" @click="$router.go(-1)"></span>
    <p>{{ title }}</p>
    <span class="iconfont icon-sousuo-copy myicon rt"></span>
  </div>
</template>
<script>
export default {
  name: 'header-back',
  props: {
    title: {
      type: String,
      default: '标题'
    }
  }
}

</script>
<style>
.header-back {
  width: 100%;
  background-color: #ebebeb;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1111;
  display: flex;
}

.header-back p {
  flex: 1;
  font-size: 16px;
  text-align: center;
  line-height: 50px;
}

.myicon {
  font-size: 24px;
  color: #aaa;
  line-height: 50px;
  padding: 0 20px
}

</style>
