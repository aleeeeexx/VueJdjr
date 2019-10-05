<template>
  <panel title="导航条" :class="$style.panel">
    <ul :class="$style.list">
      <li :class="$style.item">
        <router-link :to="{ name: 'Home' }">
          <i class="iconfont icon-shouye"></i>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66" alt="">
          <p>首页</p>
        </router-link>
      </li>
      <li :class="$style.item">
        <router-link :to="{ name: 'Money' }">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66" alt="">
          <p>理财</p>
        </router-link>
      </li>
      <li :class="$style.item">
        <router-link :to="{ name: 'Ious' }">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66" alt="">
          <p>白条</p>
        </router-link>
      </li>
      <li :class="$style.item">
        <router-link :to="{ name: 'Raise' }">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66" alt="">
          <p>众筹</p>
        </router-link>
      </li>
      <li :class="$style.item">
        <router-link :to="{ name: 'Personal' }">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66" alt="">
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </panel>

</template>

<script>
import panel from '../core/panel.vue';
export default {
  components:{
    panel
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin:0;
  height: 100px;
  z-index: 100;
  >h4{
    display: none;
  }
  .list{
    @include list(row);
    justify-content: space-around;
    a{text-decoration: none;}
    .item{
      box-sizing: border-box;
      width:20%;
      text-align: center;
      img{
        display: inline-block;
        width: 44px;
        height: 44px;
        margin: 12px 0 6px 0;
      }
      p{

        font-size: 22px;
        color: #656565;
      }
    }
  }
}
</style>
