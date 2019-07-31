<template>
  <div style="padding: 0 15px;" @click="toggleClick">
    <i class="iconfont icon-zhankai hamburger" :class="{'is-active':isActive}"></i>
  </div>
</template>

<script>
  export default {
    name: 'Hamburger',
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toggleClick() {
        this.$emit('toggleClick')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hamburger {
    display: inline-block;
    font-size: 20px;
  }

  .hamburger.is-active {
    transform: rotateY(180deg);
  }

  i{
    font-style: normal;
  }
</style>
