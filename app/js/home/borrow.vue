<template>
  <panel title="极速借贷">
    <section :class="$style.content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="">
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
  .content{
    padding-bottom: 40px;
    img{
      display: block;
      width:100%;
    }
  }
</style>
