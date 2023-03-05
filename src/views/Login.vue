<template>
  <div class="form">
    <h1>登录</h1>
    <a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
      <a-form-item>
        <a-input placeholder="Username">
          <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input type="password" placeholder="Password">
          <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-item>
      <div class="confim">
        <a-button type="primary" html-type="submit" class="login-form-button"> Log in </a-button>
        <a-button type="primary" html-type="submit" class="login-form-button"> regsiter</a-button>
      </div>
    </a-form>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  mounted() {
    this.login()
    this.regsiter()
  },
  methods: {
    login() {
      var userinfo = {
        name: '111',
        password: '222'
      }
      this.axios
        .post('/user/userInfo', userinfo)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err)
        })
    },
    regsiter() {
      var userinfo = {
        name: '555',
        password: '444'
      }
      this.axios
        .post('/api/register', userinfo)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err)
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
