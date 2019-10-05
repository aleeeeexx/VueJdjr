<template >
  <panel title=理财精选>
    <ul :class="$style.list">
      <li :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
        <div>
          <h4>月度理财</h4>
          <p>预期年化收益率4.50%</p>
        </div>
        <p>去赚钱 > </p>
      </li>
      <li :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76" alt="">
        <div>
          <h4>极度理财</h4>
          <p>历史年化回报率5.50%</p>
        </div>
        <p>去赚钱 > </p>
      </li>
      <li :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76" alt="">
        <div>
          <h4>一年理财</h4>
          <p>历史年化回报率5.80%</p>
        </div>
        <p>去赚钱 > </p>
      </li>
    </ul>
  </panel>

</template>

<script>
import panel from '../core/panel'
export default {
  components:{
    panel
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.list{
  .item{
    @include list(row)
    height: 140px;
    align-items: center;
    img{
      display: inline-block;
      width: 88px;
      height: 88px;
      margin:0 32px;
    }
    div{
      width: 344px;
      font-size: 32px;
      color:#333;
      line-height: 1.8;
      p{
        color: #ff3232;
        font-size: 24px;
        line-height: 1.1;
        @include ellipsis;
      }
    }
    p{
      color:#ff801a;
      font-size: 28px;
    }
  }
}

</style>
