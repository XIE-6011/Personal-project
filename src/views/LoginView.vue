<template>
  <div class="form">
    <h1>登录</h1>
    <a-form id="components-form-demo-normal-login" class="login-form">
      <a-form-item>
        <a-input placeholder="Username" v-model="userinfo.name">
          <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input type="password" placeholder="Password" v-model="userinfo.password">
          <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-item>
      <div class="confim">
        <a-button type="primary" html-type="submit" class="login-form-button" @click="login"> 登录 </a-button>
        <a-button type="primary" html-type="submit" class="login-form-button" @click="regsiter"> 注册</a-button>
      </div>
    </a-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userinfo: {
        name: '',
        password: ''
      }
    }
  },
  mounted() {
    // this.login()
    // this.regsiter()
  },
  methods: {
    //登录请求
    login() {
      this.axios
        .post('/user/userInfo', this.userinfo)
        .then(res => {
          console.log(res)
          if (res.data.token == 'xiedongwei') {
            this.$message.info('登录成功')
            this.$router.push('/home')
          } else {
            this.$message.info('账号密码不正确，请重试')
          }
        })
        .catch(err => {
          console.error(err)
        })
    },
    //跳转到注册页面
    regsiter() {
      this.$router.push('/regsiter')
    }
  }
}
</script>
<style lang="scss" scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 30%;
}
.form {
  height: 350px;
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .confim {
    display: flex;
    justify-content: space-between;
  }
  h1 {
    text-align: center;
  }
}
</style>
