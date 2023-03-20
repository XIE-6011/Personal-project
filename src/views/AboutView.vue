<template>
  <div class="about">
    <!-- 默认插槽 -->
    <!-- <Nav></Nav> -->
    <!-- <Nav><a-menu-item key="qita">插槽 </a-menu-item></Nav> -->
    <Nav :data="dynamicSlotName" @event="emit">
      <!-- <a-menu-item key="qita">插槽 </a-menu-item> -->
      <template v-slot:slot1> 我是left </template>
      <!-- <template v-slot:slot2> 我是right </template> -->
      <template #slot2> 我是right </template>
      <!-- <template v-slot:slot3> 我是center </template> -->
      <template #[dynamicSlotName]> 我是center </template> </Nav
    ><br />
    <p>子组件传过来的只{{ this.childdata }}</p>
    <router-link
      :to="{
        name: 'test1',
        query: {
          id: '01',
          title: '李四'
        }
      }"
      >test1 query</router-link
    >
    <router-link
      :to="{
        name: 'test2',
        params: {
          id: '02',
          title: '张三'
        }
      }"
    >
      test2 parms</router-link
    >
    <router-link
      :to="{
        path: '/test3/03/王五'
      }"
    >
      test3 prop
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
export default {
  name: 'Test',
  components: {
    Nav
  },
  data() {
    return {
      childdata: '',
      dynamicSlotName: 'slot3'
    }
  },
  methods: {
    emit(data) {
      this.childdata = data
    }
  }
}
</script>
<style lang="scss" scoped>
.about {
  padding-top: 60px;
  overflow: auto;
  width: 90%;
  height: 100%;
  // margin: 0 100px 0 100px;
  margin-left: 100px;
  margin-right: 100px;
}
</style>
