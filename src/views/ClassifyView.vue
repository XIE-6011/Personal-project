<template>
  <div class="classify">
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

      <div class="biaoqian">
        <h1 style="margin-top: 50px">全部剧库</h1>
        <div class="tag">
          <span>类别:</span>
          <a-radio-group default-value="a" name="tag" size="small" v-model="value" @change="onChange" v-for="(item, index) in tag" :key="index">
            <a-radio-button :value="item">
              {{ item }}
            </a-radio-button>
          </a-radio-group>
        </div>

        <div class="tag">
          <span>分类:</span>
          <a-radio-group default-value="a" size="small" name="leixin" v-model="value" @change="onChange" v-for="(item, index) in leixin" :key="index">
            <a-radio-button :value="item + '76c4a785b17ef0ab7e38fcbac707409da71f3cfe'">
              {{ item }}
            </a-radio-button>
          </a-radio-group>
        </div>
        <div class="tag">
          <span>地区:</span>
          <a-radio-group default-value="a" size="small" v-model="value" @change="onChange" v-for="(item, index) in area" :key="index">
            <a-radio-button :value="item">
              {{ item }}
            </a-radio-button>
          </a-radio-group>
          <div class="tag">
            <span>年代:</span>
            <a-radio-group default-value="a" size="small" v-model="value" @change="onChange" v-for="(item, index) in year" :key="index">
              <a-radio-button :value="item">
                {{ item }}
              </a-radio-button>
            </a-radio-group>
          </div>
          <div class="tag">
            <span>排序:</span>
            <a-radio-group default-value="a" size="small" v-model="value" @change="onChange" v-for="(item, index) in sort" :key="index">
              <a-radio-button :value="item">
                {{ item }}
              </a-radio-button>
            </a-radio-group>
          </div>
        </div>
      </div>

      <div class="recommend">
        <a-spin tip="Loading..." :spinning="spinning" style="width: 100%; text-align: center"></a-spin>
        <div class="content">
          <a-card hoverable style="width: 240px" v-for="(item, index) in classifydata" :key="index" @click="changeresult">
            <img slot="cover" alt="example" :src="item.cover" />
            <a-card-meta :title="item.title">
              <template slot="description"> 评分：{{ item.rating }} </template>
            </a-card-meta>
          </a-card>
          <button @click="scrollFn">加载更多</button>
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
      value: '111',
      token: '76c4a785b17ef0ab7e38fcbac707409da71f3cfe',
      tagvalue: '电影',
      leixinvalue: '',
      areavalue: '',
      yearvalue: '',
      sortvalue: '',
      pagesize: '0',
      tag: ['电影', '电视剧', '动漫', '综艺'],
      leixin: ['喜剧', '爱情', '动作', '科幻', '奇幻', '动画', '悬疑', '犯罪', '恐怖', '战争', '音乐', '歌舞', '历史', '传记', '灾难', '纪录片', '短片'],
      area: ['华语', '欧美', '韩国', '日本', '中国大陆', '美国', '中国香港', '中国台湾', '英国', '法国', '意大利', '西班牙', '印度', '泰国', '俄罗斯'],
      year: ['2023', '2022', '2021', '2020', '2010年代', '2000年代', '90年代', '80年代', '70年代', '60年代', '更早'],
      sort: ['高分优先', '近期热度'],
      classifydata: []
    }
  },
  name: 'ClassifyView',
  components: {
    IconFont
  },
  mounted() {
    this.getdsdata()
  },
  methods: {
    getdsdata() {
      this.spinning = true
      this.axios.get(`https://api.cupfox.app/api/v2/filter/?tags=${this.tagvalue}&genres=${this.leixinvalue}&countries=${this.areavalue}&year_range=${this.yearvalue}&sort=T&start=${this.pagesize}&limit=24&token=${this.token}`).then(res => {
        this.spinning = false
        console.log(res)
        // this.classifydata=res.data.subjects
        this.classifydata = this.classifydata.concat(res.data.subjects)
      })
    },
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
    onChange(e) {
      switch (e.target.name) {
        case 'tag':
          this.tagvalue = e.target.value
          this.getdsdata()
          break
        case 'leixin':
          console.log(e.target.value)
          this.leixinvalue = e.target.value
          this.getdsdata()
          break
      }
    },
    scrollFn() {
      this.pagesize = String(parseInt(this.pagesize) + 24)
      this.getdsdata()
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  // position: fixed;
  overflow: auto;
  width: 90%;
  height: 100%;
  // margin: 0 100px 0 100px;
  margin-left: 100px;
  margin-right: 100px;
  // height: 100vh;
  // overflow:scroll
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
  .biaoqian {
    position: fixed;
    top: 0px;
    z-index: 999;
    background-color: #fff;
    // margin-top: 100px;
    padding-left: 13px;
    .tag {
      width: 100%;
      left: 40px;
      line-height: 40px;
      display: flex;
      justify-content: start;
      flex-wrap: wrap;
      ::v-deep .ant-radio-group {
        margin-left: 5px;
      }
      ::v-deep .ant-radio-group :first-child {
        margin-left: 10px;
      }
    }
  }
  .recommend {
    width: 100%;
    margin-top: 300px;
    .content {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-flow: wrap;
    }
    ::v-deep .ant-card {
      margin: 20px;
    }
  }
}
</style>
