<template>
  <div class="employee">
    员工入职表

    <el-tabs type="border-card">
      <el-tab-pane label="svg-icon">
        <svg-icon icon-class="qq"></svg-icon>
        <div>
          <el-tooltip placement="top">
            <div slot="content">
              点击复制信息，复制内容如下<br>
              {{svgIconContent('qq')}}
            </div>
            111
          </el-tooltip>
        </div>

      </el-tab-pane>
      <el-tab-pane label="element-icon">

        <div>
          <el-tooltip placement="top">
            <div slot="content">
              点击复制信息，复制内容如下<br>
              {{elementIconContent('edit')}}
            </div>
            <el-button type="primary" :icon="'el-icon-' + elIconName"></el-button>
          </el-tooltip>
        </div>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  // import SvgIcon from '@/components/SvgIcon'
  export default {
    model: {},
    props: {},
    components: {
      // SvgIcon
    },
    created() {
    },
    mounted() {
    },
    data() {
      return {
        elIconName: 'edit'
      }
    },
    methods: {
      svgIconContent(symbol){
        return `<svg-icon icon-class="${symbol}"></svg-icon>>`
      },
      elementIconContent(symbol){
        return `<i class="el-icon-${symbol}"></i>`
      }
    },
    computed: {},
  }
</script>

<style lang="scss" scoped>
  .employee {
  }
</style>
