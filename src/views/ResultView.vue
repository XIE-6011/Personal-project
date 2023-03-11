<template>
  <div class="resultview">
    <div class="main">
      <div class="nav">
        <div class="nav1">
          <a-menu mode="horizontal">
            <a-menu-item key="mail" @click="changehome"> <a-icon type="home" theme="twoTone" />首页</a-menu-item>
            <a-menu-item key="dianshi"> <icon-font type="icon-dianshi" />电视剧 </a-menu-item>
            <a-menu-item key="dianyin"> <icon-font type="icon-dianying" />电影 </a-menu-item>
            <a-menu-item key="dongman"> <icon-font type="icon-dongman" />动漫 </a-menu-item>
            <a-menu-item key="zongyi"> <icon-font type="icon-zongyi" />综艺 </a-menu-item>
            <a-menu-item key="qita" @click="changeclassify"><icon-font type="icon-qita" />筛选 </a-menu-item>
          </a-menu>
          <a-input-search placeholder="搜索" enter-button />
        </div>
        <div class="exit" @click="delet"><a-icon type="user" style="font-size: 24px; margin-right: 10px" />退出</div>
      </div>
      <div class="result">
        <div class="contain">
          <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2887941178.jpg" alt="" slot="cover" />
          <div class="title">
            <h2>星落凝成糖</h2>
            <p>2023 / 中国大陆 / 剧情 爱情 奇幻 / 朱锐斌 / 陈星旭 李兰迪</p>
            <p>概述：《星落凝成糖》主要讲述了人族皇室的一对孪生公主受阴谋算计，错嫁天界与沉渊界，在一次次啼笑皆非的伪装中，原本相看两厌的错嫁夫妻们，竟逐渐相识相知萌生爱意……</p>
            <div>
              <a-icon type="star" theme="twoTone" two-tone-color="#fbd801" />
              <a-icon type="star" theme="twoTone" two-tone-color="#fbd801" />
              <a-icon type="star" theme="twoTone" two-tone-color="#fbd801" />
              <a-icon type="star" theme="twoTone" two-tone-color="#fbd801" />
              <a-icon type="star" />
            </div>
          </div>
        </div>
        <div class="download"><a-icon type="step-forward" /><span>在线播放</span> <a-icon type="arrow-down" /><span>资源下载</span><a-icon type="aliwangwang" /><span>字幕下载</span></div>
        <div class="resources">
          <div class="resourcesinfo" v-for="(item, index) in moviedata" :key="index" @click="see(item.url)">
            <img :src="item.icon" alt="" />
            <div class="resourcename">
              <span v-html="item.text" style="color: #fbd801"></span>
              <span>资源网站：{{ item.website }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hot">
        <h1>近期热门</h1>
        <img src="../assets/图片1.png" alt="" />
        <div class="hotlist">
          <a-card hoverable style="width: 170px" v-for="(item, index) in dianshidata" :key="index" @click="changeresult">
            <img slot="cover" alt="example" :src="item.cover" />
            <a-card-meta :title="item.title">
              <template slot="description"> 评分：{{ item.rating }} </template>
            </a-card-meta>
          </a-card>
        </div>
      </div>
    </div>
  </div>

  <!-- </div> -->
</template>
<script>
import { Icon } from 'ant-design-vue'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_3939507_04s9sty2edsb.js'
})
export default {
  data() {
    return {
      moviedata: [],
      dianshidata: []
    }
  },
  mounted() {
    this.getresult()
    // this.getdsdata()
  },
  components: {
    IconFont
  },
  methods: {
    getresult() {
      this.axios.get(`https://api.cupfox.app/api/v2/search/?text=星落凝成糖&type=0&from=0&size=20&douban_id=0&token=e4dcf71967e1e5e26d237df12d7bc79cd4726be9`).then(res => {
        console.log(res)
        // this.classifydata=res.data.subjects
        this.moviedata = res.data.resources
        this.dianshidata = res.data.recommend
      })
    },
    // getdsdata() {
    //   this.axios.get(`https://api.cupfox.app/api/v2/recommend/?subject=tv_热门&page_start=0&page_limit=24&token=f753bfc8d376864dd69b1eeae9a53429866424fa`).then(res => {
    //     if (res.status == 200) this.spinning = false
    //     console.log(res)
    //     this.dianshidata = res.data.recommend
    //   })
    // },
    delet() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    },
    changeclassify() {
      this.$router.push('/classify')
    },
    changeresult() {
      this.$router.push('/result')
    },
    changehome() {
      this.$router.push('/home')
    },
    see(e) {
      window.location.href = e
    }
  }
}
</script>
<style lang="scss" scoped>
.resultview {
  background-color: #f7f8fa;
}

.main {
  display: flex;
  justify-content: space-around;
  overflow: auto;
  width: 90%;
  height: 100%;
  // margin: 0 100px 0 100px;
  margin-left: 100px;
  margin-right: 100px;

  .result {
    width: 63%;
    margin-top: 60px;

    .contain {
      background-color: #fff;
      width: 100%;
      display: flex;
      justify-content: start;

      img {
        width: 18%;
        height: 250px;
      }

      .title {
        margin-left: 20px;
        width: 60%;
        height: 250px;
        // line-height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }

    .download {
      margin-top: 20px;
      background-color: #fff;

      span {
        width: 20%;
        font-size: 24px;
        margin: 0 20px;
      }
    }

    .resources {
      width: 100%;
      margin-top: 20px;
      background-color: #fff;

      .resourcesinfo {
        height: 50px;
        display: flex;
        justify-content: start;
        cursor: pointer;
        margin: 10px 0;
        padding: 10;
        .resourcename {
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        img {
          width: 4%;
        }
      }
    }
  }

  .hot {
    width: 33%;
    margin-top: 60px;
    background-color: #fff;
    img {
      width: 90%;
    }
    .hotlist {
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
    }
  }

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
}
</style>
