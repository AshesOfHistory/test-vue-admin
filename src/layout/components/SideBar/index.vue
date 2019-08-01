<template>
  <div :class="{'hasLogo': hasLogo}">
    <el-scrollbar wrap-class="scrollbar-wrapper">

      <el-menu
        ref="app_menu"
        class="app-menu-container"
        :default-active="currentActive"
        :collapse="isCollapse"
        :collapse-transition="false"
        :active-text-color="variables.menuActiveText"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
      >
        <!--router-->
        <div class="logo-container" v-if="hasLogo" >
          <img src="@/assets/images/logo.jpg" alt="" class="logo">
          <span v-if="!isCollapse" class="title">{{title}}</span>
        </div>
        <el-menu-item index="dashboard">
          <i class="el-icon-house"></i>
          <span slot="title">首页</span>
        </el-menu-item>

        <el-submenu index="form">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>表单</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="form-index">产能分析表</el-menu-item>
            <el-menu-item index="employee">员工入职表</el-menu-item>
            <el-menu-item index="holiday">请假申请表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>表格</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组1</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
            <el-menu-item index="3-4">选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  import variables from '@/stylus/variable.scss'
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
        // console.log('open')
        // console.log(key,keyPath)
      },
      handleClose(key,keyPath){
        // console.log('close')
        // console.log(key,keyPath)
      },
      handleSelect(index,indexPath){
        this.$store.dispatch('app/setPath', indexPath[indexPath.length-1])
        let routerPath = '/'
        this.$router.push(routerPath + index)
        // console.log(index)

        // let routerPath = '/'
        // if(indexPath.length == 0) {
        //   this.$router.push(routerPath)
        // } else if (indexPath.length == 1 && indexPath[0] !== 'bashboard'){
        //   routerPath += indexPath[0]
        //   this.$router.push(routerPath)
        // } else if (indexPath.length >= 2) {
        //   if (indexPath[1].indexOf('index') >= 0) {
        //     routerPath += indexPath[0]
        //   } else {
        //     routerPath += indexPath.join('/')
        //   }
        //   console.log(routerPath)
        //   this.$router.push(routerPath)
        // }
      },
    },
    computed: {
      isCollapse(){
        return !this.$store.getters.sidebar.opened
      },
      currentActive(){
        return this.$store.getters.sidebar.currentIndexPath
      },
      variables(){
        return variables
      },
      hasLogo(){
        return this.$store.getters.hasLogo
      },
      title() {
        return this.$store.getters.title
      }
    },
  }
</script>

<style lang="scss" scoped>
  /*@import "~stylus/variable.scss";*/
  /*@import "~stylus/sidebar.scss";*/
  .logo-container{
    height:40px;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: center;

    &.need-border{
      border-right: solid 1px #e6e6e6;
    }

    .logo{
      width:25px;
      height:25px;
      border-radius: 3px;

    }
    .title{
      margin-left:10px;
    }
  }
</style>
