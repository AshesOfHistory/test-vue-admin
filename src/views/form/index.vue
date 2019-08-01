<template>
  <div class="index">
    <div>
      <router-link to="/form/empolyee">员工入职表</router-link>
    </div>
    <div>
      <router-link to="/form/holiday">请假申请表</router-link>
    </div>

    <router-view></router-view>
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
    computed: {},
  }
</script>

<style lang="scss" scoped>
  .index {
  }
</style>
