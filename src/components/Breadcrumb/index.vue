<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <a @click.prevent="handleLink(item)">{{item.meta.title}}</a>
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
    created() {
      this.getBreadcrumb()
    },
    data() {
      return {
        levelList: null,
      }
    },
    watch:{
      $route(){
        this.getBreadcrumb()
      }
    },
    methods: {
      getBreadcrumb(){
        console.log(this.$route)
        console.log(this.$route.matched)
        let matched = this.$route.matched.filter(item => item.meta && item.meta.title && item.path)// 对象属性非空校验
        // const first = matched[0]
        // if (!this.isDashboard(first)){// 若非首页则在首页后面添加匹配的路由
        //   matched = [{path: '/dashboard',meta:{title: 'Dashboard'}}].concat(matched)
        // }
        this.levelList = matched
        console.log(this.levelList)
      },
      isDashboard(route){
        const name = route && route.name
        if (!name) {
          return false
        }
        return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
      },
      handleLink(item){
        const {redirect, path} = item
        if (redirect) {
          this.$router.push(redirect)
          return
        }
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
