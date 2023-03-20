<template>
  <div class="home">
    <div class="main">
      <div class="nav">
        <div class="nav1">
          <a-menu mode="horizontal">
            <a-menu-item key="mail"> <a-icon type="home" theme="twoTone" />首页</a-menu-item>
            <a-menu-item key="dianshi"> <icon-font type="icon-dianshi" />电视剧 </a-menu-item>
            <a-menu-item key="dianyin"> <icon-font type="icon-dianying" />电影 </a-menu-item>
            <a-menu-item key="dongman"> <icon-font type="icon-dongman" />动漫 </a-menu-item>
            <a-menu-item key="zongyi"> <icon-font type="icon-zongyi" />综艺 </a-menu-item>
            <a-menu-item key="qita" @click="changeclassify"> <icon-font type="icon-qita" />筛选 </a-menu-item>
          </a-menu>
          <a-input-search placeholder="搜索" enter-button />
        </div>
        <div class="exit" @click="delet"><a-icon type="user" style="font-size: 24px; margin-right: 10px" />退出</div>
      </div>
      <div class="carousel">
        <a-carousel autoplay>
          <div class="img-box">
            <img slot="cover" src="https://help-ol.bj.bcebos.com/2f1cab6fc7cda6c7755040e5054cc8ab.jpg" alt="" sizes="" srcset="" />
            <div class="moviename">黑豹2</div>
          </div>
          <div class="img-box">
            <img slot="cover" src="https://help-ol.bj.bcebos.com/859c0a180b32484c8328c25871423903.jpg" alt="" sizes="" srcset="" />
            <div class="moviename">巴比伦</div>
          </div>
          <div class="img-box">
            <img slot="cover" src="https://help-ol.bj.bcebos.com/943fe34d26064a5a02da91b38b5b8f57.jpg" alt="" sizes="" srcset="" />

            <div class="moviename">最后的生还者</div>
          </div>
          <div class="img-box">
            <img slot="cover" src="https://help-ol.bj.bcebos.com/48131e2dc3b1a3f2a36021e36bcc4111.jpg" alt="" sizes="" srcset="" />
            <div class="moviename">伊尼舍林的报丧女妖</div>
          </div>
        </a-carousel>
      </div>
      <div class="recommend">
        <h2>热播新剧</h2>
        <a-menu mode="horizontal">
          <a-menu-item key="mail" @click="getdata1('tv_热门', 'f753bfc8d376864dd69b1eeae9a53429866424fa')"> <icon-font type="icon-dianshi" />热门</a-menu-item>
          <a-menu-item key="China" @click="getdata1('tv_国产剧', '8514a3eea4394bf582fda5df3cf709d43a864e68')">国产剧</a-menu-item>
          <a-menu-item key="America" @click="getdata1('tv_美剧', '6c671198916792ad184053f70118b615882a677e')"> 美剧 </a-menu-item>
          <a-menu-item key="Britain" @click="getdata1('tv_英剧', 'ecb51a5651036aeb3830546c1d7ad42bbd15d730')"> 英剧 </a-menu-item>
          <a-menu-item key="Korea" @click="getdata1('tv_韩剧', '96805b58c1e9a0c7ef28bbe418207fec4ecd6d7f')">韩剧 </a-menu-item>
          <a-menu-item key="Japan" @click="getdata1('tv_日剧', 'a5b2d9467d4ca3440c29b3244a1d49e842ae06dd')"> 日剧 </a-menu-item>
        </a-menu>
        <div class="content">
          <a-spin tip="Loading..." :spinning="spinning" style="width: 100%; text-align: center"></a-spin>
          <a-card hoverable style="width: 240px" v-for="(item, index) in dianshidata" :key="index" @click="changeresult">
            <img slot="cover" alt="example" :src="item.cover" />
            <a-card-meta :title="item.title">
              <template slot="description"> 评分：{{ item.rating }} </template>
            </a-card-meta>
          </a-card>
          <a-pagination show-quick-jumper :default-current="2" :total="500" @change="onChange"></a-pagination>
        </div>
      </div>
      <div class="recommend">
        <h2>热门电影</h2>
        <a-menu mode="horizontal">
          <a-menu-item key="1" @click="getdata1('movie_热门', '06ec8a0e2dacb4a597a573d195242dba535f51dd')"> <icon-font type="icon-dianying" />热门</a-menu-item>
          <a-menu-item key="2" @click="getdata1('movie_华语', '922b5248afe91a60f902a6c4f22023f6c318971e')">华语</a-menu-item>
          <a-menu-item key="3" @click="getdata1('movie_欧美', '0ee34026ff871a2a834c4663eff643f2c678e6fc')"> 欧美 </a-menu-item>
          <a-menu-item key="4" @click="getdata1('movie_韩国', 'f57b91566e987ce22231cc7b85558e2a4eed9a5e')"> 韩国 </a-menu-item>
          <a-menu-item key="5" @click="getdata1('movie_日本', '8d8d5978d8eaef886a0d999fee808e426972cdaa')">日本 </a-menu-item>
          <a-menu-item key="6" @click="getdata1('movie_动作', 'bc8e3a08cda44a3c70f156aa32137046f8c57d76')"> 动作 </a-menu-item>
          <a-menu-item key="7" @click="getdata1('movie_戏剧', '0295147699f086424b5ee33c607b18856fc1f245')"> 戏剧</a-menu-item>
          <a-menu-item key="8" @click="getdata1('movie_爱情', '130dd2c260eab4382cf63e03ecb9753c021475ae')">爱情</a-menu-item>
          <a-menu-item key="9" @click="getdata1('movie_科幻', '8b01c0a25451ec9d07c3c219da9a6a3d6e95543b')"> 科幻 </a-menu-item>
          <a-menu-item key="10" @click="getdata1('movie_悬疑', '662acde65dcc87a5b76bdca175d3b53b17d17f49')"> 悬疑 </a-menu-item>
          <a-menu-item key="11" @click="getdata1('movie_恐怖', 'a74a41d66a9fd170e542ea114e5ec6748600aeae')">恐怖 </a-menu-item>
          <a-menu-item key="12" @click="getdata1('movie_豆瓣高分', '4fd2a99e6053062ae482cdf9b08b4608250b8278')"> 豆瓣评分 </a-menu-item>
        </a-menu>
        <div class="content">
          <a-card hoverable style="width: 240px" v-for="(item, index) in mvdata" :key="index" @click="changeresult">
            <img slot="cover" alt="example" :src="item.cover" />
            <a-card-meta :title="item.title">
              <template slot="description"> 评分：{{ item.rating }} </template>
            </a-card-meta>
          </a-card>
        </div>
      </div>
      <div class="recommend">
        <h2>热播动漫</h2>
        <a-menu mode="horizontal">
          <a-menu-item key="mail" @click="getdata1('热门', 'f753bfc8d376864dd69b1eeae9a53429866424fa')"> <icon-font type="icon-dongman" />热门</a-menu-item>
        </a-menu>
        <div class="content">
          <a-card hoverable style="width: 240px" v-for="(item, index) in comic" :key="index" @click="changeresult">
            <img slot="cover" alt="example" :src="item.cover" />
            <a-card-meta :title="item.title">
              <template slot="description"> 评分：{{ item.rating }} </template>
            </a-card-meta>
          </a-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'ant-design-vue'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3939507_04s9sty2edsb.js'
})
export default {
  data() {
    return {
      spinning: false,
      page: '0',
      ds: 'tv_热门',
      mv: 'movie_热门',
      token: 'f753bfc8d376864dd69b1eeae9a53429866424fa',
      token1: '06ec8a0e2dacb4a597a573d195242dba535f51dd',
      dianshidata: {},
      mvdata: {},
      comic: {}
    }
  },
  name: 'HomeView',
  components: {
    IconFont
  },
  watch: {
    ds() {
      this.getdsdata()
    },
    mv() {
      this.getmvdata()
    }
  },
  mounted() {
    this.getdsdata()
    this.getmvdata()
    this.getdmdata()
  },
  methods: {
    delet() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    },
    getdsdata() {
      this.spinning = true
      this.axios.get(`https://api.cupfox.app/api/v2/recommend/?subject=${this.ds}&page_start=${this.page}&page_limit=24&token=${this.token}`).then(res => {
        if (res.status == 200) this.spinning = false
        console.log(res)
        this.dianshidata = res.data.subjects
      })
    },
    getmvdata() {
      this.axios.get(`https://api.cupfox.app/api/v2/recommend/?subject=${this.mv}&page_start=0&page_limit=24&token=${this.token1}`).then(res => {
        console.log(res)
        this.mvdata = res.data.subjects
      })
    },
    getdmdata() {
      this.axios.get('https://api.cupfox.app/api/v2/recommend/?subject=tv_%E6%97%A5%E6%9C%AC%E5%8A%A8%E7%94%BB&page_start=1&page_limit=24&token=d7240f0984f79fb94defc50090e4b871d3f1219c').then(res => {
        console.log(res)
        this.comic = res.data.subjects
      })
    },
    getdata1(value, token) {
      var arr = value.split('_')
      console.log(arr)
      if (arr[0] == 'tv') {
        ;(this.ds = value), (this.token = token)
      } else {
        ;(this.mv = value), (this.token1 = token)
      }
    },
    onChange(e) {
      this.page = e
      document.documentElement.scrollTop = 400
      this.getdsdata()
    },
    changeresult() {
      this.$router.push('/result')
    },
    changeclassify() {
      this.$router.push('/classify')
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
      }
      ::v-deep .a-menu {
        width: 70%;
      }
      ::v-deep .ant-input-search {
        width: 30%;
        padding-top: 6px;
      }
      .exit {
        width: 10%;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        margin-right: 5;
      }
      ::v-deep .ant-menu-item {
        font-size: 18px;
      }
      ::v-deep .anticon {
        font-size: 24px;
      }
    }
    .carousel {
      padding-top: 50px;
      margin: auto;
      height: 420px;
      width: 700px;
      .img-box {
        position: relative;
        .moviename {
          position: absolute;
          font-size: 24px;
          text-align: left;
          font-weight: 700;
          width: 100%;
          height: 50px;
          bottom: 30px;
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
    .recommend {
      width: 100%;
      .content {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-flow: wrap;
      }
      ::v-deep .ant-card {
        margin: 20px;
      }
      ::v-deep .anticon {
        font-size: 24px;
      }
    }
  }
}
</style>
