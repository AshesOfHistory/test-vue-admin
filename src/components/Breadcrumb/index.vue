<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <!--处于当前页则不必跳转-->
        <span v-if="index == levelList.length-1">{{item.meta.title}}</span>
        <a v-else @click.prevent="handleLink(item)">{{item.meta.title}}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
  import pathToRegexp from 'path-to-regexp'

  export default {
    model: {},
    props: {},
    components: {},
    data() {
      return {
        levelList: null,
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    created() {
      this.getBreadcrumb()
    },
    methods: {
      getBreadcrumb(){
        let matched = this.$route.matched.filter(item => item.meta && item.meta.title && item.path)// 对象属性非空校验
        if (!this.isDashboard(matched[0])){// 若非首页则在首页后面添加匹配的路由
          matched = [{path: '/dashboard',meta:{title: '首页'}}].concat(matched)
        }
        this.levelList = matched
        console.log(this.levelList)
      },
      isDashboard(route){
        const name = route && route.name
        if (!name) {
          return false
        }
        return name.trim().toLocaleLowerCase() === 'dashboard'
      },
      handleLink(item){
        const {redirect, path} = item
        if (redirect) {
          this.$router.push(redirect)
          return
        }
        // 手动点击跳转menu
        console.log(path)
        console.log(this.$refs.app_menu)
        this.$router.push(path)
      },
    },
    computed: {},
  }
</script>

<style lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;

    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
