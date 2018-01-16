<template>
    <div class="container-fluid">
        <search></search>
        <div class="row">
            <div class="col-lg-12 col-md-12 product-list">
                <div class="container-fluid">
                    <div class="row">
                        <product></product>
                        <!--<div v-for="product in productlist" class="col-md-3 col-sm-4 col-xs-5 product">
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
                        </div>-->
                    </div>
                </div>
            </div>
            <!--<div class="col-lg-3 col-md-3 guess-list">guess</div>-->
        </div>
        <page class="page"></page>
    </div>
</template>

<script>
    import Axios from 'axios'
    import Search from './Search'
    import Product from './Product'
    import Page from './Page'

    export default {
        name: 'list',
        data () {
            return {
                productlist: [],
                msg: ''
            }
        },
        components: {
            Product,
            Search,
            Page
        },
        mounted(){
            this.msg = this.$route.params.keyword;
            Axios.get('static/product-data.json').then((res) => {
                this.productData = res.data.productData;

                for (var i = 0; i < this.productData.length; i++) {
                    var obj = {};
                    obj.productId = this.productData[i].productId;
                    obj.imgSrc = this.productData[i].imgSrc;
                    obj.price = this.productData[i].price;
                    obj.name = this.productData[i].name;
                    obj.store = this.productData[i].store;
                    obj.city = this.productData[i].city;
                    this.productlist.push(obj);
                }
                this.$store.dispatch('setProductList', this.productlist);
            });


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .guess-list {
        border: 1px solid;
    }

    .pagination{
        float: right;
    }


</style>