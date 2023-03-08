<template>
  <div class="home">
    <div class="main">
      <div class="nav">
        <a-menu  mode="horizontal">
          <a-menu-item key="mail"> <a-icon type="home" theme="twoTone"/>首页</a-menu-item>
          <a-menu-item key="dianshi" > <icon-font type="icon-dianshi" />电视剧 </a-menu-item>
          <a-menu-item key="dianyin" > <icon-font type="icon-dianying"/>电影 </a-menu-item>
          <a-menu-item key="dongman" > <icon-font type="icon-dongman"/>动漫 </a-menu-item>
          <a-menu-item key="zongyi" > <icon-font type="icon-zongyi"/>综艺 </a-menu-item>
          <a-menu-item key="qita" > <icon-font type="icon-qita"/>其他 </a-menu-item>
        </a-menu>
        <a-input-search placeholder="搜索" enter-button />
        <div class="exit" @click="delet"> <a-icon type="user" style="font-size: 24px;margin-right: 10px;" />退出</div>
      </div>
      <div class="carousel">
        <a-carousel autoplay>
          <div class="img-box">
            <img src="https://help-ol.bj.bcebos.com/2f1cab6fc7cda6c7755040e5054cc8ab.jpg" alt="" sizes="" srcset="" />
            <div class="moviename">黑豹2</div>
          </div>
          <div class="img-box">
            <img src="https://help-ol.bj.bcebos.com/859c0a180b32484c8328c25871423903.jpg" alt="" sizes="" srcset="" />
            <div class="moviename">巴比伦</div>
            
          </div>
          <div class="img-box">
            <img src="https://help-ol.bj.bcebos.com/943fe34d26064a5a02da91b38b5b8f57.jpg" alt="" sizes="" srcset="" />

            <div class="moviename">最后的生还者</div>
          </div>
          <div class="img-box">
            <img src="https://help-ol.bj.bcebos.com/48131e2dc3b1a3f2a36021e36bcc4111.jpg" alt="" sizes="" srcset="" />
            <div class="moviename">伊尼舍林的报丧女妖</div>
          </div>
        </a-carousel>
      </div>
      <div class="recommend">
        <h2>热播新剧</h2>
        <a-menu  mode="horizontal">
          <a-menu-item key="mail"> <icon-font type="icon-dianshi"/>热门</a-menu-item>
          <a-menu-item key="China" > 国产剧</a-menu-item>
          <a-menu-item key="America" > 美剧 </a-menu-item>
          <a-menu-item key="Britain" > 英剧 </a-menu-item>
          <a-menu-item key="Korea" >韩剧 </a-menu-item>
          <a-menu-item key="Japan" > 日剧 </a-menu-item>
        </a-menu>
        </div>
      </div>
    </div>
</template>

<script>
import { Icon } from 'ant-design-vue';
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3939507_04s9sty2edsb.js',
});
export default {
  data() {
    return {
      userinfo: '你好',
      en:''
    }
  },
  name: 'HomeView',
  components: {
    IconFont,
  },
  mounted(){
    this.getdata()
  },
  methods: {
    delet() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    },
    getdata(){
      this.axios.get('https://api.cupfox.app/api/v2/recommend/?subject=tv_%E7%83%AD%E9%97%A8&page_start=0&page_limit=24&token=f753bfc8d376864dd69b1eeae9a53429866424fa')
      .then(res=>{
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  // height: 900px;
  .main {
    margin: 0 100px;
    height: 100%;
    
    // background: aqua;
    .nav {
      display: flex;
      width: 100%;
      height: 50px;
     justify-content: start;
      ::v-deep .a-menu{
        width: 60%;
      }
      ::v-deep .ant-input-search{
        width: 20%;
        padding-top: 6px;
      }
      .exit{
        width: 10%;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        margin-left: 200px;
      }
     ::v-deep .ant-menu-item {
      font-size: 18px;
     }
      ::v-deep .anticon {
        font-size: 24px;
      }
    }
    .carousel {
      margin: auto;
      height: 300px;
      width: 40%;
      .img-box{
        position: relative;
        .moviename{
        position: absolute;
        font-size: 24px;
        text-align: left;
        font-weight: 700;
        width: 100%;
        height: 50px;
        bottom: 0px;
        left: 15px;
        color: white;
        z-index: 99;
        // background-color: aqua;

        }
      }
      img {
        width: 100%;
      }
      ::v-deep .slick-slide {
        text-align: center;
        height: 360px;
        overflow: hidden;
      }
    }
    .recommend{
      width: 100%;
      height: 50px;
      ::v-deep .anticon {
        font-size: 24px;
      }
    }
  }
}
</style>
