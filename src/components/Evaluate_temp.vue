<template>
    <li class="clearfix">
        <div class="master float-left">
            <div class="evaluate-buyer">
                物流的速度很快，我一个小县城，昨天下的货，今天就到了。椅子安装非常方便，我一个人差不多十分钟就能按完成安装。椅子非常漂亮，价格非常实惠，只要98块钱，值的推荐购买。椅子的质量需要时间来鉴定，我先用着，会追加评价的。
            </div>
            <ul class="evaluate-img clearfix">
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

            <div class="evaluate-seller">
                解释：多么焦急的等待就是为了看到现在的结果，亲的评价对小店来说是多么重要，它是对小店服务的肯定，更是对小店工作的默默支持，它不仅激发了小店追求更高标准的潜力，也是对小店最大的报酬，让小店感觉到一切的付出都是那么的值得，感谢亲的支持，相信小店会做的更好，因为有亲。也希望亲时刻记得有小店这样的一位期待者在期待亲的再次光临
            </div>
        </div>
        <div class="meta float-left">
            <p>
                <span>颜色分类：</span>白框黑网弓脚款
            </p>
            <p>
                <span>五星脚材质：</span>钢制脚
            </p>
            <p>
                <span>扶手类型：</span>固定扶手
            </p>
        </div>
        <div class="author float-left">
            <span>h***萍</span>（匿名）
        </div>
    </li>

</template>

<script>
    export default {
        name: 'evaluate',
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

    .float-left {
        float: left;
    }

    .evaluate-list li {
        padding: 20px 0;
        border-bottom: 1px solid #e3e3e3;
    }

    .master {
        width: 600px;
        -ms-word-wrap: break-word;
        word-wrap: break-word;
        -ms-word-break: break-all;
        word-break: break-all;
        font-size: 12px;
        line-height: 19px;
        padding-right: 30px;
    }

    .meta {
        width: 200px;
        padding-right: 30px;
        font-size: 12px;
        color: #999;
        padding-top: 30px;
        text-align: center;
    }

    .meta span, .author span {
        color: #666;
    }

    .author {
        width: 190px;
        font-size: 12px;
        color: #999;
        padding-top: 30px;
        text-align: center;
    }

    .evaluate-img {
        padding: 0;
        margin: 10px 0;
    }

    .evaluate-img li {
        float: left;
        border: 2px solid #f2f2f2;
        padding: 2px;
        margin-right: 8px;
        cursor: pointer;
    }

    .evaluate-img img {
        width: 40px;
        height: 40px;
    }

    .evaluate-seller {
        color: #AF874D;
        line-height: 19px;
    }

</style>
