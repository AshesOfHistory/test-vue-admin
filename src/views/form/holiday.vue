<template>
  <div class="holiday">
    请假申请表

    <div id="test1">引导测试1</div>
    <div id="test2">引导测试2</div>

    <el-button @click="guide">开始引导</el-button>
  </div>
</template>

<script>
  import Driver from 'driver.js' // import driver.js

  export default {
    mounted() {
    },
    data() {
      return {
        steps:[
          {
            element:'#test1',
            popover:{
              title: '测试标题1',
              description: '测试说明1',
              position: 'bottom',
              nextBtnText: '下一步',
              prevBtnText: '上一步',
              doneBtnText: '完成',
              closeBtnText: '关闭'
            }
          },
          {
            element:'#test2',
            popover:{
              title: '测试标题2',
              description: '测试说明2',
              position: 'bottom',
              nextBtnText: '下一步',
              prevBtnText: '上一步',
              doneBtnText: '完成',
              closeBtnText: '关闭'
            },
            padding:0
          },
        ]
      }
    },
    methods: {
      guide(){
        const driver = new Driver()
        // driver.highlight({
        //   element: '#test1',
        //   popover:{
        //     title: '测试标题1',
        //     description: '测试说明1',
        //     position: 'bottom',
        //   }
        // })
        driver.defineSteps(this.steps)
        driver.start()
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../../node_modules/driver.js/dist/driver.min.css";
  .holiday {
  }

</style>
