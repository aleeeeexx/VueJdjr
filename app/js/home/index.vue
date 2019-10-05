<template>
    <div>
      <heador/>
      <Slider/>
      <novice/>
      <borrow/>
      <money/>
      <product/>
      <life/>
      <footor/>
      <navbar/>
    </div>
</template>

<script>
import heador from '../public/header.vue'
import Slider from './hslider.vue'
import novice from './novice.vue'
import borrow from './borrow.vue'
import money from './money.vue'
import product from './product.vue'
import life from './life.vue'
import footor from '../public/footer.vue'
import navbar from '../public/navbar.vue'
export default {
  components:{
    heador,
    Slider,
    novice,
    borrow,
    money,
    product,
    life,
    footor,
    navbar
  }
}
</script>

<style lang="scss" module>
</style>
