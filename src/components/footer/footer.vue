<template>
  <div class="footer-wrapper">
    <div class="footer-item">
      <div class="tab-item">
        <router-link to="/home">
          <img src="./tab_item01.png" width="42" height="45">
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/classify">
          <img src="./tab_item02.png" width="42" height="45">
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shopcart">
          <img src="./tab_item03.png" width="42" height="45">
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/mypet">
          <img src="./tab_item04.png" width="42" height="45">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" ref="stylesheet/stylus">
    .footer-item
      width 375
      display flex
      height 36px
      line-height 36px
      .tab-item
        /*float: left*/
        flex 1
        width 25%
        text-align center
</style>
