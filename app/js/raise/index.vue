<template>
    <div>
      <heador/>
      <rslider/>
      <sign/>
      <recommend/>
      <more/>
      <footor :class="$style.footor"/>
      <navbar/>
    </div>
</template>

<script>
import heador from '../public/header.vue'
import footor from '../public/footer.vue'
import navbar from '../public/navbar.vue'
import rslider from './rslider.vue'
import sign from './sign.vue'
import recommend from './recommend.vue'
import more from './more.vue'
export default {
  components:{
    heador,
    footor,
    navbar,
    rslider,
    sign,
    recommend,
    more
  }
}
</script>

<style lang="scss" module>
.footor{
  li:first-child{
    display: none;
  }
}
</style>
