<template>
  <div class="app">

    <epet-footer class="footer"></epet-footer>

    <router-view></router-view>

  </div>
</template>

<script>
import footer from './components/footer/footer.vue'

export default {
  name: 'app',
  components:{
    'epet-footer' : footer
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .app
    .footer
      position fixed
      bottom 0
      background-color: #fff
      width 100%
      left 0
      height 55px
</style>
