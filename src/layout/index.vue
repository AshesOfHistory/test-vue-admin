<template>
  <div class="app-wrapper" :class="classObj">
    <div v-if="device == 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div>

    <side-bar class="sidebar-container" ></side-bar>
    <div class="main-container">
      <div :class="{'fixed-header': fixedHeader}">
        <nav-bar></nav-bar>
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import { NavBar, SideBar, AppMain } from './components'
  import ResizeMixin from './mixin/ResizeHandler'
  export default {
    model: {},
    props: {},
    components: {NavBar, SideBar, AppMain},
    created() {
    },
    data() {
      return {}
    },
    methods: {
      handleClickOutside(){
        this.$store.dispatch('app/closeSideBar', {withoutAnimation: false}) // 侧边栏缩小
      }
    },
    computed: {
      device(){
        return this.$store.state.app.device
      },
      sidebar(){
        return this.$store.state.app.sidebar
      },
      fixedHeader(){
        return this.$store.state.settings.fixedHeader
      },
      classObj(){
        return {
          hideSideBar: !this.sidebar.opened,
          openSideBar: this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
          mobile: this.device === 'mobile'
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

  @import "~stylus/mixin";
  @import "~stylus/variable";
  @import "~stylus/sidebar";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
