<template>
  <div class="test1">
    <h1>This is an test1 page</h1>
    <ul>
      <li>消息编号：{{ $route.query.id }}</li>
      <li>消息标题：{{ $route.query.title }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Test1',
  mounted() {
    console.log(this.$route)
  }
}
</script>
