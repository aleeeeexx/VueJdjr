<template>
    <div>
      <heador/>
      <islider/>
      <welfare/>
      <more/>
      <footor/>
      <navbar/>
    </div>
</template>

<script>
import heador from '../public/header.vue'
import footor from '../public/footer.vue'
import navbar from '../public/navbar.vue'
import islider from './islider.vue'
import welfare from './welfare.vue'
import more from './more.vue'
export default {
  components:{
    heador,
    footor,
    navbar,
    islider,
    welfare,
    more
  }
}
</script>

<style lang="scss" module>
</style>
