<template>
  <panel :class='$style.panel'>
    <img src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120" alt="">
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
  margin-bottom: 0;
  height: 102px;
  >h4{display: none;}
  img{width:100%;}
}
</style>
