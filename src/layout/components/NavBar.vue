<template>
  <div class="NavBar">
    <hambuger :is-active="sidebar.opened" class="hambuger-container" @toggleClick="toggleSideBar"></hambuger>
    <breadcrumb class="breadcrumb-container"></breadcrumb>
  </div>
</template>

<script>
  import Hambuger from '@/components/Hambuger'
  import Breadcrumb from '@/components/Breadcrumb'
  export default {
    model: {},
    props: {},
    components: {Hambuger, Breadcrumb},
    created() {
      console.log(this.$store.state.app.sidebar.opened)
    },
    data() {
      return {}
    },
    methods: {
      toggleSideBar(){
        this.$store.dispatch('app/toogleSideBar')
        console.log(this.$store.state.app.sidebar.opened)
      }
    },
    computed: {
      sidebar(){
        return this.$store.state.app.sidebar
      },

    },
  }
</script>

<style lang="scss" scoped>

  .NavBar {
    /*display: flex;*/
  }
</style>
