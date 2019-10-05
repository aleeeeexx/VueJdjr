<template>
  <panel title='个人清单' :class="$style.panel">
      <ul :class="$style.content">
        <li :class="$style.item" v-for='item in items' :key='item.title'>
          <img :src="item.src" alt="">
          <p :class="$style.title">{{item.title}}</p>
          <p :class="$style.text">{{item.text}} > </p>
        </li>
      </ul>
  </panel>
</template>

<script>
import panel from '../core/panel';
export default {
  components:{
    panel
  },
  data(){
    return{
      items:[
        {
          src:'//img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70',
          title:'我的资产',
          text:'查看全部资产'
        },
        {
          src:'//img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70',
          title:'我的优惠券',
          text:"查看全部"
        },
        {
          src:'//img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&height=90',
          title:'我的金币',
          text:"赚金币兑好物"
        },
        {
          src:'//img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&height=90',
          title:'我的金条',
          text:"查看额度"
        },
        {
          src:'//img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70',
          title:'我的借钱',
          text:"查看全部产品"
        },
        {
          src:'//img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&height=70',
          title:'我的白条',
          text:"去提额"
        },
        {
          src:'//img12.360buyimg.com/jrpmobile/jfs/t1/18738/31/15049/5408/5cadb703E039f2599/e92ce5b31d8b1ecf.png?width=70&height=70',
          title:'兑换优惠券',
          text:"去兑换"
        },
        {
          src:'//img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70',
          title:'我的保障',
          text:"全方位保障"
        },
        {
          src:'//img12.360buyimg.com/jrpmobile/jfs/t1/3907/34/11652/2582/5bd04759Ea9acb837/f893bf98fd67c192.png?width=54&height=54',
          title:'我的爱车',
          text:"去绑车"
        },
      ]
    }
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  >h4{display: none}
  margin-bottom: 100px;
  .content{
    .item{
      // @include list(row);
      // align-items: center;
      height: 112px;
      box-sizing: border-box;
      &:after{
        content: '';
        width:100%;
        height: 0;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        margin-left: 120px;
      }
      img{
        float: left;
        display: inline-block;
        width:48px;
        height: 48px;
        margin: 32px 32px 0 32px;;
      }
      .title{
        float: left;
        height: 88px;
        max-width: 35%;
        line-height: 88px;
        font-size: 32px;
        color: #333;
        margin-top: 12px;
        text-align: left;
        @include ellipsis;
      }
      .text{
        height: 88px;
        line-height: 88px;
        text-align: left;
        font-size: 28px;
        color: #999;
        margin: 12px 32px 0 0 ;
        float: right;
      }
      &:last-child{
        &:after{
          display: none;
        }
      }
    }
  }
}
</style>
