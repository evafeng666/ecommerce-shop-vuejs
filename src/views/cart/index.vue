<template>
  <div class="page-cart">
    <header-back title="购物车"></header-back>
    <div class="app-container">
      <div class="cart-cnt pt60">
        <!-- 未登录状态 -->
        <div v-if="loginStatus">
          <div class="nologin">
            <!-- 跳转到登录页面 -->
            <p @click="$router.openPage('/login')">
              <span>登录后享受更多优惠</span>
              <em>去登录</em>
            </p>
          </div>
        </div>
        <!-- 登录状态 -->
        <div v-else>
          <!-- 购物车为空 -->
          <div v-if=" cartListLength == 0">
            <img src="../../assets/icon/empty-car.png" alt="" @click="$router.openPage('/home')">
          </div>
          <!-- 购物车有商品 -->
          <div v-else>
            <div class="cart-list">
              <ol>
                <li class="item" v-for="(item,index) in cartList" :key="index">
                  <div class="item-row">
                    <div class="choose unchecked"  :class="{'checked': item.select} " @click="item.select=!item.select" >
                      <span class="check-span"></span>
                    </div>
                    <div class="row-img">
                      <img :src="item.src">
                    </div>
                    <div class="row-info">
                      <p class="title">{{item.title}}</p>
                      <p class="price">售价：{{item.price}}元</p>
                      <div class="num-button">
                        <span class="btn minus iconfont icon-jian" @click="item.amount>1 ? item.amount-- :''"></span>
                        <span class="num" v-model="item.amount"> {{item.amount}} </span>
                        <span class="btn plus iconfont icon-jia" @click="item.amount++"></span>
                      </div>
                      <span class="del-btn iconfont icon-del" @click="delProduct(index)"></span>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-footer" v-show="cartListLength >0">
      <div class="item allchoose unchecked" :class="{'checked':isChooseAll} " @click= "changeChoose(isChooseAll)" >
        <span class="check-span"></span>
        <span class="txt">全选</span>
      </div>
      <div class="item money">
        <p>共{{getTotal.totalAmount}}件 <span>金额</span></p>
        <p> <span class="total-price">{{getTotal.totalPrice}}</span> 元 </p>
      </div>
      <div class="item pay">去结算</div>
    </div>
  </div>
</template>
<script>
import HeaderBack from '@/components/header-back'

export default {
  name: 'cart',
  data() {
    return {
      loginStatus: false,
      cartList: [{
        src: 'http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
        title: '13.3"笔记本i5 独显',
        price: 5199.08,
        amount: 2,
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
  computed: {
    cartListLength() {
      var n = 0;
      n += this.cartList.length
      return n
    },
    //检查是否全选
    isChooseAll(){
      console.log(this.cartList)
      if(this.cartList.length === 0){return false;}
      //如果cartList中每一条数据的select都为true，返回true，否则返回false;
      return this.cartList.every(function(val){
        return val.select;
      })
    },
    //获取总价和总数量
    getTotal(){
      //获取选中的产品
      let select_cartList = this.cartList.filter(function(item) {
        return item.select;
      });
      //console.log(select_cartList)
      //循环选中产品，计算总价
      let totalPrice = 0;
      for (var i = 0; i < select_cartList.length; i++) {
        totalPrice += select_cartList[i].price * select_cartList[i].amount;
      }
      return {
        totalAmount: select_cartList.length,
        totalPrice:totalPrice.toFixed(2)
      }
    }

  },
  methods: {
    // 全选切换
    changeChoose(isSlect){
      for (var i = 0; i < this.cartList.length; i++) {
        this.cartList[i].select = !isSlect
      }
    },

    //删除单个商品
    delProduct(index){
      //根据索引删除productList的记录
      this.cartList.splice(index,1)
    }

    //删除已经选中(select=true)的产品,过滤筛选
    // deleteProduct:function () {
    //   this.cartList=this.cartList.filter(function (item) {return !item.select})
    // }


  },
  mounted() {
    var that = this;
    //为cartList添加select(是否选中)字段，初始值全为true;因为cartList不设是否选中字段，需在挂载完成时添加
    this.cartList.map((item)=>{
      that.$set(item, 'select',true)
    })
    console.log(this.cartList)
  },
  components: {
    'header-back': HeaderBack
  }
}

</script>
<style scoped >

.nologin {
  width: 100%;
  padding: 14px 0;
}

.nologin p {
  display: flex;
  align-items: center;
  padding: 0 40px 0 20px;
}

.nologin p span {
  flex: 1;
  font-size: 16px;
}

.nologin p em {
  flex: 1;
  font-size: 14px;
  font-style: normal;
  text-align: right;
  position: relative;
}

.nologin p em:after {
  content: "";
  position: absolute;
  right: -14px;
  top: 50%;
  width: 8px;
  height: 8px;
  border-left: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: translate3d(0, -50%, 0) rotate(135deg);
  -webkit-transform: translate3d(0, -50%, 0) rotate(135deg);
}

.cart-list .item {
  width: 100%;
  margin-bottom: 2px;
}

.item-row {
  background-color: #fff;
  padding: 10px 10px 10px 0;
  border-bottom: 1px solid #ebebeb;
  display: flex;
}

.item-row .choose {
  width: 30px;
  line-height: 100px;
  text-align: center;
  align-items: center;
}

.unchecked .check-span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid #666;
}

.checked .check-span {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid #f00;
  position: relative;
}

.checked .check-span:after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 20%;
  left: 20%;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #f00;

}

.row-img {
  width: 100px;
  height: 100px;
  border: 1px solid #ebebeb;
  border-radius: 2px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row-img img {
  width: auto;
  height: 85%;
}

.row-info {
  flex: 1;
  text-align: left;
  align-items: flex-start;
  position: relative;
}

.row-info .title {
  font-size: 16px;
  line-height: 1.2;
  max-height: 38px;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.row-info .price {
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
}

.row-info .num-button {
  border: 1px solid #666;
  width: 100px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.row-info .num-button span {
  flex: 1;
  text-align: center;
}

.row-info .num-button span.btn {
  background-color: #f4f4f4;
  font-size: 16px;
}

.row-info .num-button span.num {
  border-left: 1px solid #666;
  border-right: 1px solid #666;
}

.del-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 25px;
  padding: 5px;
}

.cart-footer {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 60px;
  height: 50px;
  background-color: #ebebeb;
  display: flex;

}
.cart-footer .item{
  text-align: center;
}
.cart-footer .allchoose {
  line-height: 50px;
  width: 20%;
}

.cart-footer .allchoose span.txt {
  display: inline-block;
  position: relative;
  top: -3px;
}

.cart-footer .money {
  width: 40%;
  padding-top: 4px;
  
}

.cart-footer .money .total-price {
  font-size: 18px;
  color: #f00;
}

.cart-footer .pay {
  width: 40%;
  line-height: 50px;
  color: #fff;
  background-color: #f00;

}

</style>
