<template>
    <div>
        <h1>{{this.$route.params.productId}}</h1>
        <div class="wrapper">
            <div class="detail">
                <div class="detail-pic">
                    <div class="detail-img">
                        <div class="detail-imgzoom">
                            <img src="https://img.alicdn.com/bao/uploaded/i1/TB1CfWfRpXXXXXoaXXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg"
                                 alt="">
                        </div>
                        <ul class="detail-thumb">
                            <li class="selected">
                                <img src="https://img.alicdn.com/bao/uploaded/i3/608709275/TB1pIlqawb.PuJjSZFpXXbuFpXa_!!0-item_pic.jpg_60x60q90.jpg"
                                     alt="">
                            </li>
                            <li>
                                <img src="https://img.alicdn.com/bao/uploaded/i3/608709275/TB1pIlqawb.PuJjSZFpXXbuFpXa_!!0-item_pic.jpg_60x60q90.jpg"
                                     alt="">
                            </li>
                            <li>
                                <img src="https://img.alicdn.com/bao/uploaded/i3/608709275/TB1pIlqawb.PuJjSZFpXXbuFpXa_!!0-item_pic.jpg_60x60q90.jpg"
                                     alt="">
                            </li>
                            <li>
                                <img src="https://img.alicdn.com/bao/uploaded/i3/608709275/TB1pIlqawb.PuJjSZFpXXbuFpXa_!!0-item_pic.jpg_60x60q90.jpg"
                                     alt="">
                            </li>
                            <li>
                                <img src="https://img.alicdn.com/bao/uploaded/i3/608709275/TB1pIlqawb.PuJjSZFpXXbuFpXa_!!0-item_pic.jpg_60x60q90.jpg"
                                     alt="">
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
                        </div>
                    </div>


                </div>
            </div>
            <div class="guess">
                guess
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'detail',
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    li {
        list-style: none;
    }

    .clearfix::after {
        content: '';
        display: block;
        clear: both;
        zoom: 1;
    }

    .wrapper {
        width: 1190px;
        margin: 0 auto;
    }

    .detail {
        float: left;
        width: 990px;
        /*background: #ccc;*/
    }

    .guess {
        float: left;
        width: 200px;
        background: #999;
    }

    .detail-img {
        float: left;
        margin-right: 20px;
    }

    .detail-imgzoom {
        width: 420px;
        height: 420px;
        border: 1px solid rgba(0, 0, 0, .05);
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
        color: #FF0036;
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
        color: #FF0036;
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
        background: url(//img.alicdn.com/bao/uploaded/i4/608709275/TB2ytUWu0hvOuFjSZFBXXcZgFXa_!!608709275.jpg_40x40q90.jpg) center no-repeat;
    }

    .detail-num {
        padding-left: 20px;
    }
</style>
