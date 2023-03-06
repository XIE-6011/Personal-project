//引入mockjs
import Mock from 'mockjs'
var userdata = [{ name: '111', password: '111' }, { name: '222', password: '222' }, { name: '333', password: '333' }]
//注册路由token验证
Mock.mock('/user/userInfo', 'post', (req) => {
  var tokeninfo = ''
  // 解析请求参数
  var userinfo = JSON.parse(req.body)
  // 判断账户密码是否正确
  userdata.forEach(item => {
    if (item.name == userinfo.name && item.password == userinfo.password)
    // 账户密码正确，生成token字符串，保存到本地localstorge
      tokeninfo = 'xiedongwei'
      localStorage.setItem("token",tokeninfo)
  })
  return {
    code: 200,
    token: tokeninfo,
    message: '查询用户信息成功',
    data: userdata
  }
})
//注册用户
Mock.mock('/api/register', 'post', (req) => {
  var msg = ''
  //解析请求参数
  var userinfo = JSON.parse(req.body)
  // 判断账户是否存在，是抛出异常，否则注册添加用户
  try {
    userdata.forEach(item => {
      if (item.name == userinfo.name) {
        userdata.forEach(item => {
          if (item.name == userinfo.name) {
            throw new Error("该账户已存在");
          }
        })
      }
    })

  } catch (e) {
    msg = '该账户已存在'
  }
  if (msg == '') {
    userdata.push(userinfo)
    msg = '注册成功请登录'
  }
  console.log(userdata)
  return {
    code: 200,
    message: msg,
  }
})
var { newList } = Mock.mock({
  'newList|20-30': [
    {
      id: '@increment(1)',
      title: '@ctitle',
      updat: '@date(yyyy-MM-dd hh:mm:ss)',
      info: '@cparagraph(5,10)',
      small: '@dataImage(300x200,电影图片)'
    }
  ]
})
Mock.mock('/api/movie', 'get', () => {
  return {
    status: 200,
    message: '获取电影列表成功！',
    total: newList.length,
    data: newList
  }
})
