<template>
    <div>
        <!--<h1>{{this.$route.params.productId}}</h1>-->
        <div class="wrapper">
            <search></search>
            <div class="detail">
                <div class="detail-pic clearfix">
                    <div class="detail-img">
                        <div class="detail-imgzoom">
                            <img :src="bigImgSrc"
                                 alt="">
                        </div>
                        <ul class="detail-thumb">
                            <li :key="index" v-for="(thumb, index) in thumbList" :class="{selected:isThumbSelected==index}" @click="thumbSelectHandler(index)" @mouseover="thumbSelectHandler(index)">
                                <img :src="thumb" alt="">
                            </li>
                        </ul>
                    </div>
                    <div class="detail-name">
                        <h1>椅品汇 电脑椅家用职员椅子办公椅网布休闲老板椅四脚椅弓形座椅</h1>
                        <p>简约时尚 会议居家 结实稳固 承重强</p>
                        <div class="detail-price">
                            <p>
                                <span class="detail-item">价格</span><em class="yen">¥</em><span
                                    class="detail-price-common">218.00-376.00</span>
                            </p>
                            <p>
                                <span class="detail-item">促销价</span><span
                                    class="detail-price-promotion">¥ 89.00-159.00</span>
                            </p>
                        </div>
                        <div class="detail-freight">
                            <span class="detail-item">运费</span>
                            <span>浙江湖州 至 哈尔滨 快递: 0.00</span>
                        </div>
                        <ul class="detail-total">
                            <li>
                                <span class="detail-total-label">月销量</span>
                                <span class="detail-total-count">6099</span>
                            </li>
                            <li>
                                <span class="detail-total-label">累计评价</span>
                                <span class="detail-total-count">3209</span>
                            </li>
                        </ul>
                        <div class="detail-color clearfix">
                            <span class="detail-item">颜色分类</span>
                            <ul class="detail-color-img">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div class="detail-num">
                            <span class="detail-item">数量</span>
                            <input type="number" min="0" value="1">
                        </div>
                        <div class="detail-btns">
                            <div class="detail-btn promptly">立即购买</div>
                            <div class="detail-btn carts">加入购物车</div>
                        </div>
                    </div>
                </div>
                <div class="detail-evaluate">
                    <ul class="nav nav-tabs">
                        <li role="presentation" class="active"><a href="javascript:;">累计评价(4178)</a></li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-panel fade in active classify-panel">
                            <div class="classify-score">
                                <h4>与描述相符</h4>
                                <strong>4.7</strong>
                            </div>
                            <ul class="classify clearfix">
                                <li :key="index" v-for="(classify,index) in classifyList" @click="classifyHandler(classify)"
                                    :class="{ active: classify.isSelected}">{{classify.content}}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul class="evaluate-list">
                    <div class="icon"><i class="iconfont icon-haoping"></i><span>好评</span></div>
                    
                        <evaluate></evaluate>
                        <evaluate></evaluate>
                        <evaluate></evaluate>
                    </ul>
                    <ul class="evaluate-list">
                    <div class="icon"><i class="iconfont icon-chaping"></i><span>差评</span></div>
                    
                    
                        <evaluate></evaluate>
                        <evaluate></evaluate>
                        <evaluate></evaluate>
                    </ul>
                </div>
            </div>
            <div class="guess">
                <h4>相似商品</h4>
                <div class="product-container">
                    <div v-for="product in similarityList" class="col-md-12 col-sm-12 col-xs-12 product"
                        @click="productClick(product.productId)" :key="product.productId">
                        <img :src="product.imgSrc" alt="" class="product-img">
                        <div class="product-introduce">
                            <div class="product-price">
                                <span>￥</span>
                                <strong>{{product.price}}</strong>
                            </div>
                            <div class="product-name">
                                <a href="#">{{product.name}}</a>
                            </div>
                            <!-- <div class="product-store">
                                <img src="static/img/store.png" alt="">
                                <span>{{product.store}}</span>
                                <span class="product-city">{{product.city}}</span>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Axios from "axios";
import Evaluate from "./Evaluate";
import Search from "./Search";
import Product from "./Product";

export default {
  name: "detail",
  data() {
    return {
      bigImgSrc:
        "https://img.alicdn.com/bao/uploaded/i1/TB1CfWfRpXXXXXoaXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg",
      classifyList: [
        {
          content: "质量好(92)",
          isSelected: false
        },
        {
          content: "态度不错(48)",
          isSelected: false
        },
        {
          content: "很便宜(47)",
          isSelected: false
        },
        {
          content: "快递不凑(34)",
          isSelected: false
        },
        {
          content: "性价比高(7)",
          isSelected: false
        },
        {
          content: "质量好(92)",
          isSelected: false
        },
        {
          content: "态度不错(48)",
          isSelected: false
        },
        {
          content: "很便宜(47)",
          isSelected: false
        },
        {
          content: "快递不凑(34)",
          isSelected: false
        },
        {
          content: "性价比高(7)",
          isSelected: false
        }
      ],
      thumbList: [
        "https://img.alicdn.com/bao/uploaded/i3/608709275/TB1pIlqawb.PuJjSZFpXXbuFpXa_!!0-item_pic.jpg_60x60q90.jpg",
        "https://img.alicdn.com/bao/uploaded/i3/608709275/TB1pIlqawb.PuJjSZFpXXbuFpXa_!!0-item_pic.jpg_60x60q90.jpg",
        "https://img.alicdn.com/bao/uploaded/i3/608709275/TB1pIlqawb.PuJjSZFpXXbuFpXa_!!0-item_pic.jpg_60x60q90.jpg",
        "https://img.alicdn.com/bao/uploaded/i3/608709275/TB1pIlqawb.PuJjSZFpXXbuFpXa_!!0-item_pic.jpg_60x60q90.jpg"
      ],
      isThumbSelected: 0,
      similarityList: []
    };
  },
  components: {
    Evaluate,
    Search,
    Product
  },
  mounted() {
    // 相似产品信息
    Axios.get("static/product-data.json").then(res => {
      this.productData = res.data.productData;

      for (var i = 0; i < this.productData.length; i++) {
        var obj = {};
        obj.productId = this.productData[i].productId;
        obj.imgSrc = this.productData[i].imgSrc;
        obj.price = this.productData[i].price;
        obj.name = this.productData[i].name;
        obj.store = this.productData[i].store;
        obj.city = this.productData[i].city;
        this.similarityList.push(obj);
      }
    });
  },
  methods: {
    classifyHandler(classify) {
      classify.isSelected = !classify.isSelected;
    },
    thumbSelectHandler(i) {
      this.isThumbSelected = i;
      this.bigImgSrc = this.thumbList[i];
    },
    productClick(productId) {
      this.$router.push("/detail/" + productId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../assets/icon-font/iconfont.css");

li {
  list-style: none;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
  zoom: 1;
}

.wrapper {
  width: 1190px;
  margin: 0 auto;
}

.float-left {
  float: left;
}

.detail {
  float: left;
  width: 990px;
  /*background: #ccc;*/
}

.guess {
  float: left;
  width: 200px;
  /* background: #999; */
}

.detail-img {
  float: left;
  margin-right: 20px;
}

.detail-imgzoom {
  width: 420px;
  height: 420px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.detail-imgzoom img {
  width: 100%;
  height: 100%;
}

.detail-name {
  float: left;
}

.detail-name p {
  margin-bottom: 0;
  margin-top: 0;
}

.detail-name h1 {
  font-size: 16px;
  font-weight: 700;
  color: #000;
}

.detail-name > p {
  color: #ff0036;
  font-size: 14px;
}

.detail-price {
  width: 510px;
  height: 92px;
  background: url(../../static/img/price-bg.png);
  padding-left: 20px;
  margin-top: 20px;
}

.detail-price p {
  line-height: 42px;
  height: 42px;
}

.detail-item {
  color: #999;
  font-size: 12px;
  float: left;
  width: 69px;
}

.yen {
  font-family: arial;
}

.detail-price-common {
  text-decoration: line-through;
  font-size: 14px;
}

.detail-price-promotion {
  font-size: 30px;
  color: #ff0036;
  font-weight: bolder;
  -webkit-font-smoothing: antialiased;
  font-family: arial;
}

.detail-freight {
  width: 100%;
  height: 40px;
  padding-left: 20px;
  font-size: 12px;
  line-height: 40px;
}

.detail-total {
  width: 100%;
  height: 38px;
  border: 1px dotted #c9c9c9;
  border-width: 1px 0;
  display: flex;
  line-height: 38px;
}

.detail-total li {
  width: 50%;
  height: 20px;
}

.detail-total-label {
  height: 16px;
  line-height: 16px;
  display: inline-block;
  color: #999;
}

.detail-total-count {
  height: 16px;
  line-height: 16px;
  display: inline-block;
  color: #ff0036;
  font-weight: 700;
  margin-left: 3px;
}

.detail-thumb {
  margin-top: 20px;
}

.detail-thumb li {
  margin-right: 16px;
  float: left;
  cursor: pointer;
}

.detail-thumb img {
  width: 60px;
  height: 60px;
}

.detail-thumb .selected {
  border: 2px solid #000;
}

.detail-color {
  padding-left: 20px;
}

.detail-color-img li {
  width: 38px;
  height: 38px;
  float: left;
  border: 1px solid #b8b7bd;
  margin-left: 10px;
  cursor: pointer;
  background: url(//img.alicdn.com/bao/uploaded/i4/608709275/TB2ytUWu0hvOuFjSZFBXXcZgFXa_!!608709275.jpg_40x40q90.jpg)
    center no-repeat;
}

.detail-num {
  padding-left: 20px;
  margin-top: 20px;
}

.detail-num input {
  margin-left: 10px;
  outline: none;
  text-indent: 5px;
}

.detail-btns {
  width: 380px;
  margin: 20px auto;
}

.detail-btns .detail-btn {
  width: 180px;
  height: 40px;
  border: 1px solid #ff0036;
  text-align: center;
  line-height: 40px;
  float: left;
  cursor: pointer;
  font-size: 16px;
}

.detail-btns .promptly {
  background-color: #ffeded;
  color: #ff0036;
  margin-right: 20px;
}

.detail-btns .carts {
  background-color: #ff0036;
  color: #fff;
}

.detail-evaluate {
  margin-top: 30px;
}

.classify {
  margin: 5px 0;
  float: left;
  width: 870px;
}

.classify li {
  border: 1px solid #ffd7dd;
  color: #ff0036;
  margin: 2px 6px;
  padding: 1px 10px;
  float: left;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  cursor: pointer;
  -webkit-box-shadow: 2px 2px 1px #f2f2f2;
  -moz-box-shadow: 2px 2px 1px #f2f2f2;
  -ms-box-shadow: 2px 2px 1px #f2f2f2;
  -o-box-shadow: 2px 2px 1px #f2f2f2;
  box-shadow: 2px 2px 1px #f2f2f2;
}

.classify li:hover,
.classify .active {
  background: #ffe2e2;
  border-color: #ff0036;
}

.classify-panel {
  height: 70px;
  border: 1px solid #c8c8c8;
  padding: 2px 0;
}

.classify-score {
  width: 75px;
  height: 63px;
  padding: 0 20px;
  border-right: 1px dotted #ddd;
  text-align: center;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  -o-box-sizing: content-box;
  -ms-box-sizing: content-box;
  box-sizing: content-box;
  float: left;
}

.classify-score h4 {
  color: #404040;
  font-size: 12px;
  font-weight: 100;
  margin-top: 5px;
  width: 100%;
}

.classify-score strong {
  color: #f60;
  font-family: arial;
  font-size: 32px;
  line-height: 32px;
  margin: 0 2px;
}

.evaluate-list {
  padding: 0;
  width: 49%;
  float: left;
  border: 1px solid #ccc;
  margin-right: 2%;
}

.evaluate-list:last-child {
  margin-right: 0%;
}

.iconfont {
  font-size: 40px;
}
.icon-haoping {
  color: #0f0;
}
.icon-chaping {
  color: #f00;
}
.icon {
  height: 40px;
  line-height: 40px;
}

/* 相似商品样式 */
.product {
  border: 1px solid #ededed;
  height: 320px;
  /*margin-right: 20px;*/
  margin-top: 22px;
  padding: 0 16px;
  cursor: pointer;
}

.product-introduce {
  padding: 10px;
}

.product-img {
  width: 100%;
  height: 180px;
}

.product-price {
  color: #f40;
  font-weight: 700;
  font-size: 20px;
}

.product-name {
  padding: 10px 0;
}

.product-name a {
  color: #3d3d3d;
}

.product-city {
  float: right;
}

.product-store span {
  color: #888;
}
</style>
