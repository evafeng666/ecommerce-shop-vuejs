<template>
  <div class="app-shell myclassify">
    <header-back  title="分类"> </header-back>
    
    <div class="app-container">
      <div class="left-menu scroll-box" ref="leftMenu">
        <ul>
          <li class="item" :class="{'active': activeIndex == index }" v-for="(item,index) in dataList" :key="index" @click="scrollToTarget(index)">{{item.name}}</li>
        </ul>
      </div>
      <div class="right-box scroll-box" ref="rightView" @scroll="scrollEvent">
        <ul>
          <li class="right-item" v-for="(item,index) in dataList" :key="index">
            <p class="title"><span>{{item.name}}</span></p>
            <div class="sub-wrap">
              <div class="sub-item" v-for="(subitem,index) in item.children" :key="index"  @click="$router.openPage(subitem.link)" >
                <img :src="subitem.src">
                <p>{{subitem.name}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBack from '@/components/header-back'

export default {
  name: 'classify',
  data() {
    return {
      scroll:'',
      activeIndex: 0,
      dataList: [{
          name: '新品',
          children: [{
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }, {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }]
        },
        {
          name: '手机',
          children: [{
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        },
        {
          name: '电视',
          children: [{
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        },
        {
          name: '电脑',
          children: [{
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        },
        {
          name: '家电',
          children: [{
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        },
        {
          name: '路由',
          children: [{
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        },
        {
          name: '智能',
          children: [{
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        },
        {
          name: '电源',
          children: [{
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        },
        {
          name: '耳机',
          children: [{
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        },
        {
          name: '音箱',
          children: [{
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        },
        {
          name: '礼品',
          children: [{
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        },
        {
          name: '生活',
          children: [{
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        },
        {
          name: '米粉卡',
          children: [{
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        },
        {
          name: '零售店',
          children: [{
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            },
            {
              name: '小米5s',
              src: 'http://qiniu.verydog.cn//show.liluo.cc/img_0505.png',
              link: '/detail/1019'
            }
          ]
        }
      ]
    }
  },
  methods:{
    scrollToTarget(index){

      //this.$refs.rightView.scrollTop = 200;
      setTimeout(()=>{
        this.activeIndex = index 
        }, 10)
    },
     scrollEvent(e){
        //console.log(e)
        console.log(e.srcElement.scrollTop, e.target.scrollTop)
      },

  },
  mounted(){
  },
  components: {
    'header-back': HeaderBack
  }
}

</script>

<style scoped>
/*.app-container {
  width: 100%;
  background-color: #fff;
}*/

.scroll-box {
  overflow-y: auto
}

.left-menu {
  width: 28%;
  padding: 2%;
  overflow-x: hidden;
  position: fixed;
  top:60px;
  bottom: 60px;
  z-index: 1111;
}

.left-menu .item {
  margin-bottom: 24px;
  text-align: center;
  transition: all .1s ease;
}

.left-menu .item.active {
  color: #f00;
  transform: scale(1.2);
}

.right-box {
  border-left: 1px solid #ebebeb;
  padding: 0 2% 0 35%
}

.right-item {
  padding: 10px;
}

.right-item .title {
  text-align: center;
  position: relative;
  margin-bottom: 10px;
}

.right-item .title span {
  display: inline-block;
  font-size: 14px;
}

.right-item .title:before {
  display: block;
  width: 30px;
  height: 1px;
  top: 50%;
  left: 20%;
  background-color: #e0e0e0;
  position: absolute;
  content: "";
}

.right-item .title:after {
  display: block;
  width: 30px;
  height: 1px;
  top: 50%;
  right: 20%;
  background-color: #e0e0e0;
  position: absolute;
  content: "";
}

.sub-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.sub-item {
  width: 33.3%;
  text-align: center;
  margin-bottom: 6px;
}

.sub-item img {
  width: 85%;
  padding-bottom: 5px;
}

.sub-item p {
  font-size: 12px;
}

</style>
