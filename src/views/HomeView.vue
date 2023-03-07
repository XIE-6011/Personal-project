<template>
  <div class="home">
    <div class="main">
      <div class="nav"><a-menu v-model="current" mode="horizontal">
      <a-menu-item key="mail"> <a-icon type="mail" theme="twoTone"/>首页 </a-menu-item>
      <a-menu-item key="app" disabled> <a-icon type="appstore" theme="twoTone" two-tone-color="#eb2f96"/>国产 </a-menu-item>
      <a-menu-item key="app" disabled> <a-icon type="appstore" theme="twoTone" two-tone-color="#52c41a"/>电视剧 </a-menu-item>
      <a-menu-item key="app" disabled> <a-icon type="appstore" theme="twoTone" two-tone-color="#eb2f96"/>电影 </a-menu-item>
      <a-menu-item key="app" disabled> <a-icon type="appstore" theme="twoTone" two-tone-color="#52c41a"/>动漫 </a-menu-item>
      <a-menu-item key="app" disabled> <a-icon type="appstore" theme="twoTone" two-tone-color="#eb2f96"/>综艺 </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">
          <a-icon type="setting" theme="twoTone" two-tone-color="#52c41a" />其他</span >
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            首页
          </a-menu-item>
          <a-menu-item key="setting:2">
            国产
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
    </a-menu></div>
      <div class="carousel">
        <a-carousel autoplay>
          <div><img src="https://help-ol.bj.bcebos.com/8cedeb187db5c50c327467bdb94bfbdb.jpg" alt="" sizes="" srcset="" /></div>
          <div><img src="https://help-ol.bj.bcebos.com/859c0a180b32484c8328c25871423903.jpg" alt="" sizes="" srcset="" /></div>
          <div><img src="https://help-ol.bj.bcebos.com/9f126f756dbd79c150bf30778090c840.jpg" alt="" sizes="" srcset="" /></div>
          <div><img src="https://help-ol.bj.bcebos.com/48131e2dc3b1a3f2a36021e36bcc4111.jpg" alt="" sizes="" srcset="" /></div>
        </a-carousel>
      </div>
      <div class="translate">

      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Languages from 'languages-js'
export default {
  data() {
    return {
      userinfo: '你好',
      en:''
    }
  },
  name: 'HomeView',
  components: {
    HelloWorld
  },
  mounted(){
  },
  methods: {
    delet() {
      localStorage.removeItem('token')
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 900px;
  .main {
    margin: 0 100px;
    height: 100%;
    // background: aqua;
    .nav {
      width: 100%;
      height: 50px;
      text-align: center;
    }
    .carousel {
      margin: auto;
      height: 360px;
      width: 40%;
      background: #364d79;
      img {
        width: 100%;
      }
      ::v-deep .slick-slide {
        text-align: center;
        height: 360px;
        line-height: 360px;
        background: #364d79;
        overflow: hidden;
        h3 {
          color: #fff;
        }
      }
    }
  }
}
</style>
