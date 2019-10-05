<template>
  <panel title="白条福利">
    <section :class="$style.content">
      <ul>
        <li :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
          <div :class="$style.text">
            <h4>开通白条</h4>
            <p>送188元礼包</p>
          </div>
          <p>立即开通 > </p>
        </li>
        <li :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120" alt="">
          <div :class="$style.text">
            <h4>白条闪付</h4>
            <p>新手享158礼包</p>
          </div>
          <p>立即开通 > </p>
        </li>
        <li :class="$style.item">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120" alt="">
          <div :class="$style.text">
            <h4>白条提额</h4>
            <p>金融app专享礼包</p>
          </div>
          <p>立即开通 > </p>
        </li>
      </ul>
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
  .content{
    .item{
      @include list(row);
      align-items: center;
      height: 140px;
      &:after{
        content: '';
        height: 0;
        width: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        margin-left: 150px;
      }
      &:last-child{
        &:after{
          display: none;
        }
      }
      img{
        width: 88px;
        height: 88px;
        display: inline-block;
        margin:0 32px;
      }
      .text{
        font-size: 32px;
        color: #333;
        line-height: 1.8;
        width: 304px;
        p{
          color: #999;
          font-size: 24px;
          line-height: 1.1;
          @include ellipsis;
        }
      }
      >p{
        color: #FF801A;
        font-size: 28px;
      }
    }
  }
</style>
