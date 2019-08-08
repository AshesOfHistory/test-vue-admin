<template>
  <div class="holiday">
    请假申请表

    <div id="test1" @click="handleClipboard($event,'引导测试1剪贴板')">引导测试1</div>
    <div id="test2" @click="handleClipboard($event,'引导测试2剪贴板')">引导测试2</div>

    <el-button @click.prevent.stop="guide">开始引导</el-button>

    <!--api-key="6zax7tzh6cj0m68t9vmzr1tebo4uey8lu290tvv19q2h4c7y"-->
    <tinymce></tinymce>
  </div>
</template>

<script>
  import Driver from 'driver.js' // import driver.js
  import 'driver.js/dist/driver.min.css'
  import clipboard from '@/utils/clipboard'

  import Tinymce from '@/components/Tinymce'

  export default {
    components: {
      Tinymce
    },
    mounted() {
      this.driver = new Driver({
        animate: true,
        opacity: 0.7,
        allowClose: true,
        nextBtnText: '下一步',
        prevBtnText: '上一步',
        doneBtnText: '完成',
        closeBtnText: '关闭'
      })



    },
    data() {
      return {
        num:0,
        driver: null,
        steps:[
          {
            element:'#test1',
            popover:{
              title: '测试标题1',
              description: '测试说明1'
            }
          },
          {
            element:'#test2',
            popover:{
              title: '测试标题2',
              description: '测试说明2'
            }
          },
        ],

      }
    },
    methods: {
      guide(){
        this.driver.defineSteps(this.steps)
        this.driver.start()
      },
      handleClipboard(event,text){
        clipboard(event, text)
      },
    },
  }
</script>

<style lang="scss" scoped>
  /*@import "../../../node_modules/driver.js/dist/driver.min.css";*/
  .holiday {
  }

</style>
