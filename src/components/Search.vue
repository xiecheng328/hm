<template>
    <!--<form class="search-form" role="form">
              <div class="row">
                <div class="col-lg-4">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="请输入搜索关键字"  v-model="keyword">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button" @click="searchHandler">搜索</button>
                    </span>
                  </div>
                </div>
              </div>
            </form>-->
    <div class="search">
        <input type="text" class="search-ipt" placeholder="请输入搜索关键字" v-model="keyword" @keyup="keyupHandler">
        <button class="search-btn" @click="searchHandler">搜&nbsp;索</button>
    </div>
</template>

<script>
import Axios from 'axios'

export default {
    name: 'search',
    data() {
        return {
            keyword: '',
            productlist: []
        }
    },
    methods: {
        searchHandler() {
            console.log(this.keyword);
            //ajax

            // this.$router.push('/list/' + this.keyword);
            // this.msg = this.$route.params.keyword;
            Axios.get('http://136.56.35.44:7080/products/search?page=1'+ '&keyword=' + this.keyword).then((res) => {
                this.productData = res.data;
                console.log(this.productData);

                for (var i = 0; i < this.productData.length; i++) {
                    var obj = {};
                    obj.productId = this.productData[i]._id;
                    // obj.imgSrc = this.productData[i].imgSrc;
                    // obj.price = this.productData[i].price;
                    obj.name = this.productData[i].product_name;
                    obj.store = this.productData[i].store;
                    // obj.city = this.productData[i].city;
                    this.productlist.push(obj);
                }
                this.$store.dispatch('setProductList', this.productlist);
            });
        },
        keyupHandler(e) {
            if (e.keyCode == 13) {
                this.searchHandler();
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
    width: 550px;
    height: 40px;
    border: 1px solid #13D1BE;
    background: #ffffff;
    border-radius: 4px;
    margin: 30px auto;
}

.search-ipt {
    width: 84%;
    height: 100%;
    outline: 0;
    border: none;
    line-height: 100%;
    box-sizing: border-box;
    display: inline-block !important;
    padding: 10px;
    font-size: 15px;
    text-indent: 5px;
    border-radius: 4px 0 0 4px;
}

.search-btn {
    outline: 0;
    width: 16%;
    height: 100%;
    box-sizing: border-box;
    line-height: 100%;
    background: #13d1be;
    border: none;
    float: right;
    color: #fff;
    cursor: pointer;
}
</style>
