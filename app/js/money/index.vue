<template>
  <div>
    <heador/>
    <mslider/>
    <banner/>
    <money/>
    <bannerb/>
    <finance/>
    <bannerc/>
    <footor :class="$style.footor"/>
    <navbar/>
  </div>
</template>

<script>
import heador from '../public/header.vue'
import footor from '../public/footer.vue'
import navbar from '../public/navbar.vue'
import mslider from './mslider.vue'
import banner from './banner.vue'
import money from './money.vue'
import bannerb from './bannerb.vue'
import finance from './finance.vue'
import bannerc from './bannerc.vue'
export default {
  components:{
    heador,
    footor,
    navbar,
    mslider,
    banner,
    money,
    bannerb,
    finance,
    bannerc
  }
}
</script>

<style lang="scss" module>
.footor{
  margin-top: 0 !important;
  li:first-child{
    display: none;
  }
}
</style>
