<template>
  <div class="login">

    <div id="vaptchaContainer">
    </div>
    <!--验证码容器-->

    <div class="login-container">
      <h2 class="login-title">系统登录</h2>
      <el-input v-model="username"></el-input>
      <el-input class="login-input" type="password" v-model="password"></el-input>
      <el-button @click="handleLogin">登录</el-button>
    </div>
  </div>
</template>

<script>
  import * as getData from '../../utils/getData.js';
  import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
  import {getToken, setToken, removeToken} from '@/utils/auth'

  export default {
    created(){
    },
    data () {
      return {
        username: 'wilson_wp',
        password: '123456',
        dataArr: [],
        token:'',
        vaptchaObj:{},
      }
    },

    computed:{
      ...mapState({// 将 store 中的 state 绑定到 Vue 组件中的 computed 计算属性后，对 state 进行更改需要通过 mutation 或者 action，在 Vue 组件中直接进行赋值 (this.myState = 'ABC') 是不会生效的。
        showHeader: state => state.cart.showHeader
      }),// 不建议使用，所有的state的参数都要由getters获取
      ...mapGetters('cart',{// 第一个showHeader是我自定义的只要对应template里v-if="showHeader"就行,第二个showHeader是对应的cart.js里的getters里的isShow
        isShowHeader: 'isShowHeader',
        getChangeNum: 'getChangeNum'
      }),
    },
    watch:{

    },
    methods:{
      ...mapMutations('cart', ['toogleHeaderShow','setNum']),// 注意这里是数组格式
      ...mapActions('cart',['asyncToogleHeaderShow']),
      asyncChange(){
        this.$store.dispatch('cart/asyncSetNum',this.num++);
        this.$store.dispatch('cart/asyncToogleHeaderShow').then((num)=>{console.log(num)});
        console.log(this.$store.state.cart.showHeader);// 手动获取state状态
      },
      toObject(){

      },
      init(){
        // 已有token免登录
        // let token = window.localStorage.getItem('token');
        let token = getToken();//改为用cookie方式存储token
        if (token) {
          console.log(token)
          this.token = token
        } else {
          // 未登陆用户需要向服务器发送登录验证
          let that = this;
          vaptcha({
            //配置参数
            vid: '5d2d90a4fc650eec0cfd899f', // 验证单元id
            type: 'invisible', // 展现类型 click 点击式  embed  嵌入式  invisible 隐藏式
            container: '#vaptchaContainer', // 按钮容器，可为Element 或者 selector
          }).then((vaptchaObj) => {
            that.vaptchaObj = vaptchaObj
          }).catch(()=>{
            that.vaptchaObj = {}
          })
        }
      },
      handleLogin(){
        if (this.vaptchaObj) {
          // 手动点击事件触发验证
          this.vaptchaObj.validate();
          this.vaptchaObj.listen('pass', ()=>{
            let data = {
              username: this.username,
              age:this.age,
              token:this.vaptchaObj.getToken()// 该验证对象自的带获取token的方法
            };
            if (data.token) {// 登录后逻辑处理
              setToken(data.token);// 本地存储远程获取到的token
              // window.localStorage.setItem('token',data.token);
              this.$router.push('/index');
            }
          })
        }
      },
    },
    mounted(){
      this.init();
      this.toObject()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .login{
    display: flex;
    justify-content: center;
    align-items: center;
    .login-container{
      width:500px;
      padding-bottom: 20px;
      padding-left: 20px;
      padding-right:20px;
      background: #f4f4f4;
      .login-input{
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
</style>
