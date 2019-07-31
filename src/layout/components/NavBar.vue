<template>
  <div class="nav-bar">
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
    },
    data() {
      return {}
    },
    methods: {
      toggleSideBar(){
        this.$store.dispatch('app/toogleSideBar')
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

  .nav-bar {
    display: flex;
    justify-content: left;
    align-items: center;
    height:50px;
  }
</style>
