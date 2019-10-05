<template>
  <panel title="更多福利">
    <section :class="$style.content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330" alt="">
      <img src='//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330'>
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330">
    </section>
  </panel>
</template>

<script>
import panel from '../core/panel';
export default {
  components:{
    panel
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
  .content{
    padding-bottom: 60px;
    @include list(row)
    img{
      display: inline-block;
      box-sizing: border-box;
      width:33.3%;
      height: 280px;
    }
  }
</style>
