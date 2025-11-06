// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: '<CloudEnvId>' // 云函数ID cloud1-7geespkred11a162
})

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  switch (event.action) {
    case 'jumpPage': {
      return JumpPage(event)
    }
  }
  
  return 'action not found'
}

async function JumpPage({ path = '', envVersion = 'release', query = '' }) {
  return cloud.openapi.urlscheme.generate({
    jumpWxa: {
      path,
      query,
      env_version: envVersion,
    },
    isExpire: false,
  })
}
