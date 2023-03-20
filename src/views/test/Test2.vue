<template>
  <div class="test2">
    <h1>This is an test2 page</h1>
    <ul>
      <li>消息编号：{{ $route.params.id }}</li>
      <li>消息标题：{{ $route.params.title }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Test2',
  mounted() {
    console.log(this.$route)
  }
}
</script>
