<template>
  <panel :class='$style.panel'>
    <img src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240" alt="">
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
