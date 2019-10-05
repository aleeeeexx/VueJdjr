<template>
  <panel title='会员福利' :class="$style.panel">
    <section :class="$style.content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png" alt="">
      <p>会员福利 > </p>
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
@import "../../css/element.scss";
.panel{
  margin-top: 120px;
  >h4{display: none;}
  .content{
    @include list(row);
    justify-content: space-between;
    align-items: center;
    height: 140px;
    img{
      display: inline-block;
      width: 100px;
      height: 100px;
      margin:0 32px;
    }
    p{
      height: 30px;
      line-height: 30px;
      color: #999;
      font-size: 28px;
      margin-right: 32px;
    }
  }
}

</style>
