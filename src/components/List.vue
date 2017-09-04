<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-9 col-md-9 product-list">
        <div class="container-fluid">
          <div class="row">
            <div v-for="product in productlist" class="col-md-3 col-sm-4 col-xs-5 product">
              <img :src="product.imgSrc" alt="" class="product-img">
              <div class="product-introduce">
                <div class="product-price">
                  <span>￥</span>
                  <strong>{{product.price}}</strong>
                </div>
                <div class="product-name">
                  <a href="#">{{product.name}}</a>
                </div>
                <div class="product-store">
                  <img src="static/img/store.png" alt="">
                  <span>{{product.store}}</span>
                  <span class="product-city">{{product.city}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 guess-list">guess</div>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'

  export default {
  name: 'list',
  data () {
    return {
      productlist : [],
      msg : ''
    }
  },
  mounted(){
      this.msg = this.$route.params.keyword;
//    this.$store.dispatch('changeTitle',['music','rgb(0, 150, 136)','<']);
    Axios.get('static/product-data.json').then((res)=>{
      this.productData = res.data.productData;

      for(var i=0;i<this.productData.length;i++){
        var obj = {};
        obj.imgSrc = this.productData[i].imgSrc;
        obj.price = this.productData[i].price;
        obj.name = this.productData[i].name;
        obj.store = this.productData[i].store;
        obj.city = this.productData[i].city;
//        obj.lrc = "/static/"+this.musicData[i].lrc;
        this.productlist.push(obj);
      }

    });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .guess-list{
    border: 1px solid;
  }
  .product{
    border: 1px solid #ededed;
    height: 320px;
    margin-right: 20px;
    margin-top: 22px;
    padding: 0;
    cursor: pointer;
  }
  .product-introduce{
    padding: 10px;
  }
  .product-img{
    width: 100%;
    height: 180px;
  }
  .product-price{
    color: #f40;
    font-weight: 700;
    font-size: 20px;
  }
  .product-name{
    padding: 10px 0;
  }
  .product-name a{
    color: #3d3d3d;
  }
  .product-city{
    float: right;
  }
  .product-store span{
    color: #888;
  }

</style>
