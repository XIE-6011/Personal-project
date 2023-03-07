<template>
  <div class="home">
    <div class="main">
      <div class="nav"><h1>导航栏</h1></div>
      <div class="carousel">
        <a-carousel autoplay>
          <div><img src="https://help-ol.bj.bcebos.com/8cedeb187db5c50c327467bdb94bfbdb.jpg" alt="" sizes="" srcset="" /></div>
          <div><img src="https://help-ol.bj.bcebos.com/859c0a180b32484c8328c25871423903.jpg" alt="" sizes="" srcset="" /></div>
          <div><img src="https://help-ol.bj.bcebos.com/9f126f756dbd79c150bf30778090c840.jpg" alt="" sizes="" srcset="" /></div>
          <div><img src="https://help-ol.bj.bcebos.com/48131e2dc3b1a3f2a36021e36bcc4111.jpg" alt="" sizes="" srcset="" /></div>
        </a-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
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
