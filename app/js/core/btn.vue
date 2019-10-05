<template>
  <section :class="[btnClass,cname]">
    <slot/>
  </section>
</template>

<script>
export default {
  data(){
    return{
      btnClass:'btn'
    }
  },
  props:{
    cname:{
      type:String,
      default:''
    }
  }
}
</script>

<style lang="scss">
  @import '../../css/element.scss';
  .btn{
    @include btn;
  }
</style>
