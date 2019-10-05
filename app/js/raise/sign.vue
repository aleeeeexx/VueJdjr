<template>
  <panel title='每日签到'>
    <section :class="$style.content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">
    </section>
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
@import '../../css/element.scss';
.content{
  margin-bottom: 40px;
  @include list(row);
  img{
    display: inline-block;
    width: 320px;
    height: 136px;
  }
}
</style>
