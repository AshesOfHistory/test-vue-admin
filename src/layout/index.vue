<template>
  <div class="app-wrapper" :class="classObj">
    <!--侧边栏-->
    <side-bar ref="sidebarContainer" class="sidebar-container" :class="{'is-collapsed':!sidebar.opened}"></side-bar>
    <!--主页面展示区-->
    <div ref="mainContainer" class="main-container" :class="{'is-collapsed':!sidebar.opened}">
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
          mobile: this.device === 'mobile',
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
    position: relative;
    height: 100%;
    width: 100%;

    .sidebar-container.is-collapsed{
      width: $sideBarWidthCollapsed!important;
    }

    .main-container {
      min-height: 100%;
      margin-left: $sideBarWidth;
      /*展开左边距*/
      position: relative;

      &.is-collapsed{
        margin-left: $sideBarWidthCollapsed;
        /*收缩左边距*/
      }

      .fixed-header {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        width: calc(100% - #{$sideBarWidth});
        transition: width 0.28s;
      }
    }

    .hideSidebar .fixed-header {
      width: calc(100% - 54px)!important;
    }

    .mobile .fixed-header {
      width: 100%;
    }
  }





</style>
