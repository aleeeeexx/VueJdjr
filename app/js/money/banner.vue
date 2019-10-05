<template>
  <panel :class='$style.panel'>
    <img src="//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&height=270" alt="">
  </panel>
</template>

<script>
import panel from '../core/panel.vue'
export default {
  components:{
    panel
  }
}
</script>

<style lang="scss" module>
.panel{
  >h4{display: none;}
  img{width:100%;}
}
</style>
