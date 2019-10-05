<template>
  <panel title='In货推荐'>
    <section :class="$style.content">
      <div :class="$style.item" v-for='item in items' :key='item.src'>
        <img :src="item.src" alt="">
        <ul :class="$style.list">
          <li>
            <img :src="item.src2" alt="">
            <p :class="$style.title">{{item.title}}</p>
            <p :class="$style.price"><em>¥{{item.price}}</em>起</p>
            <article>
              <div :class="$style.progress">
                <div :class="$style.line"/>
              </div>
              <p>{{item.progress}}</p>
            </article>
          </li>
          <li>
            <img :src="item.src3" alt="#">
            <p :class="$style.title">{{item.title2}}</p>
            <p :class="$style.price"><em>¥{{item.price2}}</em>起</p>
            <article>
              <div :class="$style.progress">
                <div :class="$style.line"/>
              </div>
              <p>{{item.progress2}}</p>
            </article>
          </li>
        </ul>
      </div>
    </section>
  </panel>
</template>

<script>
import panel from '../core/panel.vue'
export default {
  components:{
    panel
  },
  data(){
    return{
      items:[
        {
          src:'//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
          src2:'//img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
          src3:'//img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg',
          title:'双响炮蓝牙音箱',
          title2:'脑波相机',
          price:'29.00',
          price2:'998.00',
          progress:'172%',
          progress2:'259%'
        },
        {
          src:'//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
          src2:'//img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg',
          src3:'//img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg',
          title:'赖公高准封藏老酒',
          title2:'泗洪花雕醉蟹',
          price:'99.00',
          price2:'58.00',
          progress:'199%',
          progress2:'222%'
        },
        {
          src:'//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
          src2:'//img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg',
          src3:'//img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg',
          title:'智能电动牙刷',
          title2:'电子烟',
          price:'19.00',
          price2:'258.00',
          progress:'481%',
          progress2:'105%'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
  .item{
    >img{
      display: block;
      width: 100%;
    }
    .list{
      @include list(row);
      li{
        width: 50%;
        text-align: center;
        height: 396px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0.02);
        img{
          display: inline-block;
          width: 180px;
          height: 180px;
          margin:44px 0 20px 0;
        }
        .title{
          font-family:PingFangSC-Medium;
          font-size: 28px;
          color: #444;
        }
        .price{
          font-family:PingFangSC-Medium;
          font-size: 20px;
          color: #999;
          height: 48px;
          line-height: 48px;
          margin-top: 5px;
          em{
            font-size: 36px;
            color: #ff3232;
            margin-right: 4px;
          }

        }
        article{
          @include list(row);
          align-items: center;
          justify-content: space-around;
          padding: 0 20px;
          height: 30px;
          line-height: 30px;
          margin-top: 20px;
          .progress{
            width: 144px;
            height: 10px;
            border-radius: 22px;
            .line{
              max-width: 100%;
              height: 10px;
              background: linear-gradient(270deg, #F55 1%, #FF9C31 100%);
              border-radius: 22px;
            }
          }
          p{
            font-size: 24px;
            color: #999;
          }
        }
      }
    }
  }
</style>
