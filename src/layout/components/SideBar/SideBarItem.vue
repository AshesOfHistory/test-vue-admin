<template>
  <div class="SideBarItem">
    SideBarItem
  </div>
</template>

<script>
  import store from '@/store'
  export default {
    model: {},
    props: {},
    components: {},
    created() {
    },
    data() {
      return {}
    },
    methods: {},
    computed: {//利用computed的set和get来监听vuex的数据并自动操作
      device: {
        get(){
          return store.getters.device
        },
        set(device){
          store.dispatch('app/toogleDevice',device)
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .SideBarItem {
  }
</style>
