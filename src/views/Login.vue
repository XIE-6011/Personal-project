<template>
  <div class="login">
    <h1>111</h1>
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
        password: '555'
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
<style lang="scss"></style>
