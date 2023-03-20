<template>
  <div class="nav">
    <div class="nav">
      <div class="nav1">
        <a-menu mode="horizontal">
          <a-menu-item key="mail"> <a-icon type="home" theme="twoTone" />首页</a-menu-item>
          <a-menu-item key="dianshi"> <icon-font type="icon-dianshi" />电视剧 </a-menu-item>
          <a-menu-item key="dianyin"> <icon-font type="icon-dianying" />电影 </a-menu-item>
          <a-menu-item key="dongman"> <icon-font type="icon-dongman" />动漫 </a-menu-item>
          <a-menu-item key="zongyi"> <icon-font type="icon-zongyi" />综艺 </a-menu-item>
          <a-menu-item key="qita"><icon-font type="icon-qita" />筛选 </a-menu-item>
          <slot :name="data"></slot>
          <slot name="slot1">123</slot>
          <slot name="slot2">123</slot>
        </a-menu>
        <button @click="trandata">给父组件传值</button>
        <a-input-search placeholder="搜索" enter-button />
      </div>
      <div class="exit"><a-icon type="user" style="font-size: 24px; margin-right: 10px" />退出</div>
    </div>
  </div>
</template>
<script>
import { Icon } from 'ant-design-vue'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3939507_04s9sty2edsb.js'
})

export default {
  components: {
    IconFont
  },
  name: 'TestView',
  props: {
    // 接受父组件的传值
    data: {
      type: String,
      default: '123'
    }
  },
  methods: {
    trandata() {
      this.$emit('event', this.data)
    }
  }
}
</script>
<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  width: 90%;
  height: 50px;
  justify-content: space-between;
  background-color: #fff;
  .nav1 {
    width: 70%;
    display: flex;
    justify-content: space-between;
    //   ::v-deep .a-menu {
    //   width: 70%;
    // }
    ::v-deep .ant-input-search {
      width: 20%;
      padding-top: 6px;
    }
  }

  .exit {
    // display: inline-block;
    width: 10%;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    // margin-left: 5px;
  }
  ::v-deep .ant-menu-item {
    font-size: 18px;
  }
  ::v-deep .anticon {
    font-size: 24px;
  }
}
</style>
