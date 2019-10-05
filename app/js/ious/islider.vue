<template >
  <panel title='白条轮播图'>
    <section :class="$style.content">
      <slider :items='items'/>
    </section>
  </panel>

</template>

<script>
import panel from '../core/panel.vue'
import slider from '../core/slider.vue'
export default {
  components:{
    panel,
    slider
  },
  data(){
    return{
      items:[
        {
          href:'Ious',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320'
        },
        {
          href:'Ious',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320'
        },
      ]
    }
  }
}
</script>

<style lang="scss" module>
  .panel{
    >h4{
      display: none;
    }
  }
</style>
