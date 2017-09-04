<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-9 col-md-9 product-list">
        <div class="container-fluid">
          <div class="row">
            <div v-for="product in productlist" class="col-md-3 col-sm-4 col-xs-5 product">
              <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3058668829,3584059364&fm=27&gp=0.jpg" alt="" class="product-img">
              <div class="product-introduce">
                {{ product.title }}
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
      this.musicData = res.data.musicData;

      for(var i=0;i<this.musicData.length;i++){
        var obj = {};
        obj.title = this.musicData[i].title;
        obj.author = this.musicData[i].author;
        obj.url = this.musicData[i].src;
        obj.pic = this.musicData[i].musicImgSrc;
        obj.lrc = "/static/"+this.musicData[i].lrc;
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
    border: 1px solid;
    height: 350px;
    margin-right: 20px;
    margin-top: 22px;
    padding: 0;
  }
  .product-img{
    width: 100%;
    height: 180px;
  }

</style>
