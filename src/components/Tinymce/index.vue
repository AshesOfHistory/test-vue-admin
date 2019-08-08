<template>
  <div class="index">
    <editor id="tinymce" v-model="tinymceHtml" :init='init'></editor>
  </div>
</template>

<script>
  import tinymce from 'tinymce/tinymce'
  import 'tinymce/themes/silver'
  import Editor from '@tinymce/tinymce-vue'
  import 'tinymce/plugins/image'// 插入上传图片插件
  import 'tinymce/plugins/media'// 插入视频插件
  import 'tinymce/plugins/table'// 插入表格插件
  import 'tinymce/plugins/lists'// 列表插件
  import 'tinymce/plugins/wordcount'// 字数统计插件
  import 'tinymce/plugins/fullscreen'// 全屏
  import 'tinymce/plugins/preview'// 预览
  export default {
    model: {},
    props: {},
    components: {
      Editor
    },
    created() {
    },
    mounted() {
      tinymce.init({
        images_upload_handler: (blobInfo, success, failure) => {
          const img = "data:image/jpeg;base64," + blobInfo.base64();
          success(img);
        }
      })
    },
    data() {
      return {
        tinymceHtml: '',
        init: {
          language_url:'/static/tinymce/zh_CN.js',
          language:'zh_CN',
          skin_url:'/static/tinymce/skins/ui/oxide',
          height:300,
          plugins: 'lists image media table wordcount fullscreen preview',
          toolbar: 'undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat',
          browser_spellcheck: true, // 拼写检查
          branding: false, // 去水印
          elementpath: false,  //禁用编辑器底部的状态栏
          statusbar: false, // 隐藏编辑器底部的状态栏
          paste_data_images: true, // 是否允许粘贴图像
          menubar: false, // 是否隐藏最上方menu
        }
      }
    },
    methods: {},
    computed: {},
  }
</script>

<style lang="scss" scoped>
  .index {
  }
</style>
