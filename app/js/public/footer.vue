<template>
  <panel title="公司信息" :class="$style.panel">
    <ul :class="$style.content">
      <li :class="$style.banner">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="">
      </li>
      <li :class='$style.list'>
        <div :class="$style.item" v-for='item in items' :key='item.text'>
          <router-link :to="{ name: item.href }">
            <img :src="item.src" alt="">
            <p>{{item.text}}</p>
          </router-link>
        </div>
      </li>
      <li :class="$style.text">Copyright © 2004-2017 京东JD.com 版权所有</li>
      <li :class="$style.text">投资有风险，购买需谨慎</li>
      <li :class="$style.text">京东金融平台服务协议</li>
      <li :class="$style.text">京东金融隐私政策</li>
    </ul>
  </panel>
</template>

<script>
import panel from '../core/panel.vue'
export default {
  components:{
    panel
  },
  data(){
    return {
      items:[
        {
          href:'Home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108',
          text:'客户端'
        },
        {
          href:'Home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108',
          text:'触屏版'
        },
        {
          href:'Home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108',
          text:'电脑版'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
  >h4{
    display: none;
  }
}
.content{
  background-color:#f5f5f5;
  .banner{
    img{
      width:100%;
    }
  }
  .list{
    @include list(row);
    justify-content: space-around;
    .item{
      box-sizing: border-box;
      width: 33.333%;
      height: 186px;
      padding-top: 20px;
      text-align: center;
      a{
        text-decoration: none;
        img{
          display: inline-block;
          width: 90px;
          height: 90px;
        }
        p{
            font-size: 26px;
            color: #999;
            margin-top: 12px;
          }
        }
      }
  }
  .text{
    border:1px solid #ddd;
    padding: 24px 0 ;
    height: 38px;
    line-height: 38px;
    font-size: 24px;
    color: #999;
    text-align: center;
    &:last-child{
      margin-bottom: 90px;
    }
  }
}
</style>
