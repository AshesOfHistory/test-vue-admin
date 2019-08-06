<template>
  <svg aria-hidden="true" v-on="$listeners">
    <use :xlink="iconName" class=""></use>
    <!--#icon-${iconClass}-->
  </svg>
</template>

<script>
  export default {
    model: {},
    props: {
      iconClass: {
        type: String,
        required: true
      },
    },
    components: {},
    created() {
    },
    mounted() {
    },
    data() {
      return {}
    },
    methods: {},
    computed: {
      iconName() {
        return `#icon-${this.iconClass}`
      },
    },
  }
</script>

<style lang="scss" scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
