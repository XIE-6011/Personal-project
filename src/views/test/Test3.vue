<template>
  <div class="test3">
    <h1>This is an test3 page</h1>
    <ul>
      <li>消息编号：{{ id }}</li>
      <li>消息标题：{{ title }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Test3',
  props: ['id', 'title'],
  mounted() {
    console.log(this.id)
    console.log(this.$route)
  }
}
</script>
