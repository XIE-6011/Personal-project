<template>
  <div class="form">
    <h1>注册</h1>
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
        <a-button type="primary" html-type="submit" class="login-form-button" @click="regsiter"> regsiter</a-button>
      </div>
    </a-form>
  </div>
</template>
<script>
// @ is an alias to /src
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
    regsiter() {
      this.axios.post('/api/register', this.userinfo).then(res => {
        if (res.data.message == '注册成功请登录') {
          this.$message.info('注册成功请登录')
          this.$router.push('/')
        } else this.$message.info('账号已存在，请重新注册')
      })
    }
  }
}
</script>
<style lang="scss">
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
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
