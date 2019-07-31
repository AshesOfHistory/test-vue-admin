<template>
  <div class="index">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        class="app-menu-container"
        :default-active="currentActive"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <i class="el-icon-house"></i>
          <span slot="title">首页</span>
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span v-if="isCollapse">表单</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组1</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-menu-item index="2-4">选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  export default {
    model: {},
    props: {
    },
    components: {},
    created() {
    },
    data() {
      return {}
    },
    methods: {
      handleOpen(key,keyPath){
        console.log(key,keyPath)
      },
      handleClose(key,keyPath){
        console.log(key,keyPath)
      },
      handleSelect(index,indexPath){
        console.log(index,indexPath)
        this.$store.getters.sidebar.currentIndexPath = indexPath[indexPath.length-1]
      }
    },
    computed: {
      isCollapse(){
        return !this.$store.getters.sidebar.opened
      },
      currentActive(){
        return this.$store.state.app.sidebar.currentIndexPath
      }
    },
  }
</script>

<style lang="scss" scoped>

  /*.app-menu-container:not(.el-menu--collapse){*/
    /*width:200px;*/
  /*}*/
</style>
