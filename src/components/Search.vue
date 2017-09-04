<template>
    <form class="search-form" role="form">
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
    </form>
</template>

<script>
  export default {
    name: 'search',
    data () {
      return {
        keyword: ''
      }
    },
    methods: {
      searchHandler: function () {
        console.log(this.keyword);
        //ajax

        this.$router.push('/list/' + this.keyword);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-form{
}

</style>
