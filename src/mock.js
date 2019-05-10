const Mock = require('mockjs')

Mock.mock('/api/users', () => {
  return {}
})
