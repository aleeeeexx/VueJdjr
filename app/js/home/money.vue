<template>
  <panel title="理财精选">
    <section :class="$style.content">
      <dl :class="$style.item" v-for='item in items' :key='item.title'>
        <dt>{{item.title}}<span>{{item.sub}}</span></dt>
        <dd>{{item.rate}}</dd>
        <dd>{{item.text}}</dd>
      </dl>
    </section>
  </panel>
</template>

<script>
import panel from '../core/panel.vue';
export default {
  components:{
    panel
  },
  data(){
    return {
      items:[
        {
          title:'定期理财',
          sub:'理财首选',
          rate:'5.60%',
          text:'历史年化回报率'
        },
        {
          title:'小白理财',
          sub:'理财首选',
          rate:'4.22%',
          text:'7日年化收益率'
        },
        {
          title:'月月盈',
          sub:'养老保障',
          rate:'5%',
          text:'7日年化收益率'
        },
        {
          title:'小白基金',
          sub:'天天赚钱',
          rate:'4.27%',
          text:'7日年化收益率'
        },
      ]
    }
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.content{
  @include list(row);
  box-sizing: border-box;
  &:after{
    content: '';
    width:100%;
    height: 0px;
    display: block;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    position: relative;
    top:-208px;
  }
  .item{
    padding: 34px 16px;
    text-align: left;
    width: 50%;
    box-sizing: border-box;
    position: relative;
    &:after{
      content: '';
      width: 1px;
      height: 136px;
      position: absolute;
      top:50%;
      margin-top: -68px;
      right: 0;
      border-right: 1px solid #ddd;
    }
    &:nth-child(2n){
      &:after{
        display: none;
      }
    }
    dt{
      font-size: 30px;
      color: #333;
      line-height: 1.2;
      span{
        font-size: 22px;
        color: #ff5115;
        margin:0 0 0 2px;
        padding: 0 8px;
        border:1px solid #ff5115;
        vertical-align: 1px;
      }
    }
    dd:nth-child(2){
      font-weight: 700;
      font-size: 44px;
      color: #ff5115;
      height: 58px;
      line-height: 58px;
      color:#ff5115;
    }
    dd:nth-child(3){
      height: 34px;
      line-height: 34px;
      font-size:24px;
      color: #999;
    }

  }
}

</style>
