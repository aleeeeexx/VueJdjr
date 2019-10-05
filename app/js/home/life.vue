<template>
  <panel title='生活服务'>
    <section :class="$style.content">
      <div :class="$style.item" v-for='item in items' :key=item.src>
        <router-link :to="{ name: item.href }">
          <img :src="item.src" alt="$">
          <p>{{item.text}}</p>
        </router-link>
      </div>
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
          href:'Home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135',
          text:'惠加油'
        },
        {
          href:'Home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132',
          text:'小白信用'
        },
        {
          href:'Home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135',
          text:'信用卡还款'
        },
        {
          href:'Home',
          src:"//img12.360buyimg.com/jrpmobile/jfs/t3172/259/7993557249/4351/fd082707/58be8a81Nd7716a06.png?width=135&height=135",
          text:'卡转让'
        },
        {
          href:'Home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135',
          text:'定期还款'
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
  justify-content: space-around;
  padding-bottom: 40px;
  a{
    text-decoration: none;
  }
  .item{
    box-sizing: border-box;
    text-align: center;
    width: 20%;
    img{
      display: inline-block;
      width: 90px;
      height: 90px;
    }
    p{
      text-align: center;
      margin-top: 12px;
      font-size: 26px;
      color:#666;
      @include ellipsis;

    }
  }
}
</style>
