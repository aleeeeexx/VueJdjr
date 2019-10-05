<template>
  <panel title='新手特权' :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <h4>下载app<em :class="$style.red">送888元礼包</em></h4>
        <p>新手专享</p>
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
      </div>
      <div :class="$style.item">
        <ul>
          <li>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="">
            <h4>领128新手红包</h4>
            <p>立即开通</p>
          </li>
          <li>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100" alt="">
            <h4>打白条<em :class="$style.red">享免息</em></h4>
            <p>立即开通享好礼</p>
          </li>
        </ul>
      </div>
    </section>
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
.red{color: red}
.panel{
  >h4{
    border-bottom: 1px solid #ddd;
  }
  .content{
    @include list(row)
    .item{
      width: 50%;
      box-sizing: border-box;
    }
    .item:first-child{
      padding:32px 20px;
      text-align: center;
      border-right: 1px solid #ddd;
      h4{
        font-size:26px;
        color:#000;
        text-align: center;
        height: 40px;
        line-height: 40px;
      }
      p{
        font-size: 24px;
        color:#999;
        text-align: center;
        margin-top: 6px;
      }
      img{
        width: 132px;
        height: 132px;
        display: inline-block;
        margin-top:20px;
      }
    }
    .item:last-child{
      @include list;
      justify-content: space-around;
      li{
        padding: 32px 28px;
        &:first-child{
          border-bottom: 1px solid #ddd;
        }
        img{
          display: inline-block;
          width: 80px;
          height: 80px;
          float: right;
        }
        h4{
          font-size:26px;
          color:red;
          text-align: left;
          height: 40px;
          line-height: 40px;
          @include ellipsis;
        }
        p{
          font-size: 24px;
          color:#999;
          text-align: left;
          margin-top: 6px;
        }
      }
    }
  }

}
</style>
