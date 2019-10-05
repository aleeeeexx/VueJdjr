<template>
  <slider :items='items'/>
</template>

<script>
import slider from '../core/slider.vue'
export default {
  components:{
    slider
  },
  data(){
    return{
      items:[
        {
          href:'Home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400'
        },
        {
          href:'Home',
          src:"//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
