<template>
  <div class="app-main" :class="{'is-collapse': isCollapsed}">
    <router-view :key="key" ></router-view>
    <!--<transition name="fade-transform" mode="out-in">-->
      <!--<router-view :key="key" ></router-view>-->
      <!--&lt;!&ndash;name="app-main"&ndash;&gt;-->
    <!--</transition>-->
  </div>
</template>

<script>
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
    computed: {
      isCollapsed(){
        return !this.$store.getters.sidebar.opened
      },
      key(){
        return this.$route.path
      }
    },
  }
</script>

<style lang="scss" scoped>

  .app-main {
    /*50 = navbar  */
    min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .fixed-header+.app-main {
    padding-top: 50px;
  }

  /* fade-transform */
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all .5s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>

<style lang="scss">
  .el-popup-parent--hidden {
    .fixed-header {
      padding-right: 15px;
    }
  }
</style>
