const faker = require('faker/locale/zh_CN')

const fakeMember = index => ({
  id: `member${index}`,
  type: 'test',
  name: 'fda',
  phone: 'manager@vivedu.com',
  dept: '描述不对',
  identityNum: 18787032999,
})

const fakeSchool = () => {
  const status = [0, 1, 2]
  return ({
    name: '一个素材',
    teacher: 'fda',
    job: 'job',
    createTime: 'Tue Sep 11 2018 16:28:08 GMT+0800 (中国标准时间)',
    phone: 'manager@vivedu.com',
    dept: '描述不对',
    status: status[Math.floor(Math.random() * 3)],
    members: Array.from({ length: 10 }).map((_, index) => fakeMember(index)),
  })
}

module.exports = { fakeSchool }
