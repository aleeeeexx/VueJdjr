<template>
    <div>
      <heador/>
      <welfare/>
      <list/>
      <navbar/>
    </div>
</template>

<script>
import heador from '../public/header.vue'
import navbar from '../public/navbar.vue'
import welfare from './welfare.vue'
import list from './list.vue'
export default {
  components:{
    heador,
    navbar,
    welfare,
    list
  }
}
</script>

<style lang="scss" module>
</style>
