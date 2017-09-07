<template>
    <div class="product-container">
        <div v-for="product in this.$store.state.productlist" class="col-md-3 col-sm-4 col-xs-6 product"
             @click="productClick(product.productId)">
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
</template>

<script>
    export default {
        name: 'product',
//        props : ['imgSrc'],
        data () {
            return {}
        },
        methods: {
            productClick(productId){
                this.$router.push('/detail/' + productId);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
