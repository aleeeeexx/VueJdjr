<template>
  <panel title="众筹轮播图" :class="$style.panel">
    <section :class="$style.content">
      <swiper :options="options">
        <swiper-slide>百万白条券免费送，速来领取！！<em>></em></swiper-slide>
        <swiper-slide>签到领流量，1元500M！<em>></em> </swiper-slide>
      </swiper>
    </section>
  </panel>

</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper';
import panel from '../core/panel';
export default {
  components:{
    panel,
    swiper,
    swiperSlide
  },
  data(){
    return{
      options:{
        direction: 'vertical',
        autoplay:true,
        loop:true
      }
    }
  }
}
</script>
<style lang='scss'>
.swiper-container-vertical{
  height: 72px;
  .swiper-slide{
    font-family: PingFangSC-Medium;
    font-size: 28px;
    color:#333;
    em{
      color: #ddd;
      float: right;
      margin-right: 20px;
    }
  }
}


</style>

<style lang="scss" module>
@import '~swiper/dist/css/swiper.css';
.panel{
  margin-top: 120px;
  >h4{
    display: none;
  }
  .content{
    height: 72px;
    line-height: 72px;
    overflow: hidden;
    padding-left: 178px;
    background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left top no-repeat;
  }
}


</style>
