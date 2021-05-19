const categorySet = [
  {
    id: '00',
    text: '全部',
  },
  {
    id: '01',
    text: '课件',
    children: ['0101', '0102'],
  },
  {
    id: '02',
    text: '素材',
    children: ['0201', '0202', '0203', '0204'],
  },
  {
    id: '0101',
    text: '义务教育',
    children: ['010101', '010102', '010103', '010104'],
    parentId: '01',
  },
  {
    id: '010101',
    text: '科学',
    children: ['01010101', '01010102', '01010103', '01010104'],
    parentId: '0101',
  },
  {
    id: '01010101',
    text: '物质科学',
    parentId: '010101',
  },
  {
    id: '01010102',
    text: '生命科学',
    parentId: '010101',
  },
  {
    id: '01010103',
    text: '地球宇宙',
    parentId: '010101',
  },
  {
    id: '01010104',
    text: '技术工程',
    parentId: '010101',
  },
  {
    id: '010102',
    text: '德育',
    children: ['01010201', '01010202', '01010203', '01010204', '01010205'],
    parentId: '0101',
  },
  {
    id: '01010201',
    text: '理想信念',
    parentId: '010102',
  },
  {
    id: '01010202',
    text: '社会主义核心价值观',
    parentId: '010102',
  },
  {
    id: '01010203',
    text: '中华优秀传统文化',
    parentId: '010102',
  },
  {
    id: '01010204',
    text: '生态文明',
    parentId: '010102',
  },
  {
    id: '01010205',
    text: '心理健康',
    parentId: '010102',
  },
  {
    id: '010103',
    text: '安全',
    children: [
      '01010301',
      '01010302',
      '01010303',
      '01010304',
      '01010305',
      '01010306',
    ],
    parentId: '0101',
  },
  {
    id: '01010301',
    text: '社会安全',
    parentId: '010103',
  },
  {
    id: '01010302',
    text: '公共安全',
    parentId: '010103',
  },
  {
    id: '01010303',
    text: '意外伤害',
    parentId: '010103',
  },
  {
    id: '01010304',
    text: '网络信息安全',
    parentId: '010103',
  },
  {
    id: '01010305',
    text: '自然灾害',
    parentId: '010103',
  },
  {
    id: '01010306',
    text: '其他事故',
    parentId: '010103',
  },
  {
    id: '010104',
    text: '心理',
    children: [
      '01010401',
      '01010402',
      '01010403',
      '01010404',
      '01010405',
      '01010406',
    ],
    parentId: '0101',
  },
  {
    id: '01010401',
    text: '自我认知',
    parentId: '010104',
  },
  {
    id: '01010402',
    text: '学会学习',
    parentId: '010104',
  },
  {
    id: '01010403',
    text: '人际交往',
    parentId: '010104',
  },
  {
    id: '01010404',
    text: '情绪调试',
    parentId: '010104',
  },
  {
    id: '01010405',
    text: '升学择业',
    parentId: '010104',
  },
  {
    id: '01010406',
    text: '生活和社会适应',
    parentId: '010104',
  },
  {
    id: '0102',
    text: '高等教育',
    children: [
      '010201',
      '010202',
      '010203',
      '010204',
      '010205',
      '010206',
      '010207',
      '010208',
      '010209',
      '010210',
      '010211',
      '010212',
      '010213',
    ],
    parentId: '01',
  },
  {
    id: '010201',
    text: '工学',
    parentId: '0102',
  },
  {
    id: '010202',
    text: '医学',
    parentId: '0102',
  },
  {
    id: '010203',
    text: '文学',
    parentId: '0102',
  },
  {
    id: '010204',
    text: '理学',
    parentId: '0102',
  },
  {
    id: '010205',
    text: '农学',
    parentId: '0102',
  },
  {
    id: '010206',
    text: '法学',
    parentId: '0102',
  },
  {
    id: '010207',
    text: '哲学',
    parentId: '0102',
  },
  {
    id: '010208',
    text: '艺术学',
    parentId: '0102',
  },
  {
    id: '010209',
    text: '历史学',
    parentId: '0102',
  },
  {
    id: '010210',
    text: '教育学',
    parentId: '0102',
  },
  {
    id: '010211',
    text: '管理学',
    parentId: '0102',
  },
  {
    id: '010212',
    text: '经济学',
    parentId: '0102',
  },
  {
    id: '010213',
    text: '军事学',
    parentId: '0102',
  },

  {
    id: '0201',
    text: '3D 模型',
    children: [
      '020101',
      '020102',
      '020103',
      '020104',
      '020105',
      '020106',
      '020107',
      '020108',
      '020109',
      '020110',
      '020111',
      '020112',
    ],
    parentId: '02',
  },
  {
    id: '020101',
    text: '人物',
    children: [
      '02010101',
      '02010102',
      '02010103',
      '02010104',
      '02010105',
      '02010106',
      '02010107',
      '02010108',
    ],
    parentId: '0201',
  },
  {
    id: '02010101',
    text: '古代人物',
    parentId: '020101',
  },
  {
    id: '02010102',
    text: '现代人物',
    parentId: '020101',
  },
  {
    id: '02010103',
    text: '动漫人物',
    parentId: '020101',
  },
  {
    id: '02010104',
    text: '神话人物',
    parentId: '020101',
  },
  {
    id: '02010105',
    text: '机器人',
    parentId: '020101',
  },
  {
    id: '02010106',
    text: '外星人',
    parentId: '020101',
  },
  {
    id: '02010107',
    text: '人体结构',
    parentId: '020101',
  },
  {
    id: '02010108',
    text: '其他',
    parentId: '020101',
  },

  {
    id: '020102',
    text: '动物',
    children: [
      '02010201',
      '02010202',
      '02010203',
      '02010204',
      '02010205',
      '02010206',
      '02010207',
    ],
    parentId: '0201',
  },
  {
    id: '02010201',
    text: '昆虫',
    parentId: '020102',
  },
  {
    id: '02010202',
    text: '飞行动物',
    parentId: '020102',
  },
  {
    id: '02010203',
    text: '爬行动物',
    parentId: '020102',
  },
  {
    id: '02010204',
    text: '水生动物',
    parentId: '020102',
  },
  {
    id: '02010205',
    text: '哺乳动物',
    parentId: '020102',
  },
  {
    id: '02010206',
    text: '恐龙',
    parentId: '020102',
  },
  {
    id: '02010207',
    text: '其他',
    parentId: '020102',
  },

  {
    id: '020103',
    text: '植物',
    children: ['02010301', '02010302', '02010303'],
    parentId: '0201',
  },
  {
    id: '02010301',
    text: '树木',
    parentId: '020103',
  },
  {
    id: '02010302',
    text: '花草',
    parentId: '020103',
  },
  {
    id: '02010303',
    text: '其他',
    parentId: '020103',
  },

  {
    id: '020104',
    text: '建筑',
    children: ['02010401', '02010402', '02010403', '02010404'],
    parentId: '0201',
  },
  {
    id: '02010401',
    text: '古代建筑',
    parentId: '020104',
  },
  {
    id: '02010402',
    text: '现代建筑',
    parentId: '020104',
  },
  {
    id: '02010403',
    text: '科幻建筑',
    parentId: '020104',
  },
  {
    id: '02010404',
    text: '其他',
    parentId: '020104',
  },

  {
    id: '020105',
    text: '家具',
    children: [
      '02010501',
      '02010502',
      '02010503',
      '02010504',
      '02010505',
      '02010506',
      '02010507',
      '02010508',
    ],
    parentId: '0201',
  },
  {
    id: '02010501',
    text: '沙发',
    parentId: '020105',
  },
  {
    id: '02010502',
    text: '床',
    parentId: '020105',
  },
  {
    id: '02010503',
    text: '桌椅',
    parentId: '020105',
  },
  {
    id: '02010504',
    text: '柜子',
    parentId: '020105',
  },
  {
    id: '02010505',
    text: '厨具',
    parentId: '020105',
  },
  {
    id: '02010506',
    text: '器皿',
    parentId: '020105',
  },
  {
    id: '02010507',
    text: '灯具',
    parentId: '020105',
  },
  {
    id: '02010508',
    text: '其他',
    parentId: '020105',
  },

  {
    id: '020106',
    text: '机械',
    children: ['02010601', '02010602', '02010603', '02010604'],
    parentId: '0201',
  },
  {
    id: '02010601',
    text: '工业机械',
    parentId: '020106',
  },
  {
    id: '02010602',
    text: '医疗机械',
    parentId: '020106',
  },
  {
    id: '02010603',
    text: '机械工具',
    parentId: '020106',
  },
  {
    id: '02010604',
    text: '其他',
    parentId: '020106',
  },

  {
    id: '020107',
    text: '艺术品',
    children: [
      '02010701',
      '02010702',
      '02010703',
      '02010704',
      '02010705',
      '02010706',
    ],
    parentId: '0201',
  },
  {
    id: '02010701',
    text: '文房四宝',
    parentId: '020107',
  },
  {
    id: '02010702',
    text: '乐器',
    parentId: '020107',
  },
  {
    id: '02010703',
    text: '雕像',
    parentId: '020107',
  },
  {
    id: '02010704',
    text: '瓷器',
    parentId: '020107',
  },
  {
    id: '02010705',
    text: '工艺品',
    parentId: '020107',
  },
  {
    id: '02010706',
    text: '其他',
    parentId: '020107',
  },

  {
    id: '020108',
    text: '交通工具',
    children: ['02010801', '02010802', '02010803', '02010804', '02010805'],
    parentId: '0201',
  },
  {
    id: '02010801',
    text: '汽车',
    parentId: '020108',
  },
  {
    id: '02010802',
    text: '火车',
    parentId: '020108',
  },
  {
    id: '02010803',
    text: '飞机',
    parentId: '020108',
  },
  {
    id: '02010804',
    text: '船只',
    parentId: '020108',
  },
  {
    id: '02010805',
    text: '其他',
    parentId: '020108',
  },

  {
    id: '020109',
    text: '电子电器',
    children: ['02010901', '02010902', '02010903', '02010904', '02010905'],
    parentId: '0201',
  },
  {
    id: '02010901',
    text: '家用电器',
    parentId: '020109',
  },
  {
    id: '02010902',
    text: '通讯设备',
    parentId: '020109',
  },
  {
    id: '02010903',
    text: '电脑设备',
    parentId: '020109',
  },
  {
    id: '02010904',
    text: '数码设备',
    parentId: '020109',
  },
  {
    id: '02010905',
    text: '其他',
    parentId: '020109',
  },

  {
    id: '020110',
    text: '军事',
    children: [
      '02011001',
      '02011002',
      '02011003',
      '02011004',
      '02011005',
      '02011006',
      '02011007',
    ],
    parentId: '0201',
  },
  {
    id: '02011001',
    text: '枪械',
    parentId: '020110',
  },
  {
    id: '02011002',
    text: '火炮',
    parentId: '020110',
  },
  {
    id: '02011003',
    text: '导弹',
    parentId: '020110',
  },
  {
    id: '02011004',
    text: '战机',
    parentId: '020110',
  },
  {
    id: '02011005',
    text: '坦克',
    parentId: '020110',
  },
  {
    id: '02011006',
    text: '舰艇',
    parentId: '020110',
  },
  {
    id: '02011007',
    text: '其他',
    parentId: '020110',
  },
  {
    id: '020111',
    text: '航天',
    children: [
      '02011101',
      '02011102',
      '02011103',
      '02011104',
      '02011105',
      '02011106',
    ],
    parentId: '0201',
  },
  {
    id: '02011101',
    text: '航天飞机',
    parentId: '020111',
  },
  {
    id: '02011102',
    text: '运载火箭',
    parentId: '020111',
  },
  {
    id: '02011103',
    text: '卫星',
    parentId: '020111',
  },
  {
    id: '02011104',
    text: '飞船',
    parentId: '020111',
  },
  {
    id: '02011105',
    text: '空间站',
    parentId: '020111',
  },
  {
    id: '02011106',
    text: '其他',
    parentId: '020111',
  },

  {
    id: '020112',
    text: '自然宇宙',
    children: ['02011201', '02011202', '02011203', '02011204', '02011205'],
    parentId: '0201',
  },
  {
    id: '02011201',
    text: '岩石',
    parentId: '020112',
  },
  {
    id: '02011202',
    text: '冰',
    parentId: '020112',
  },
  {
    id: '02011203',
    text: '山川',
    parentId: '020112',
  },
  {
    id: '02011204',
    text: '天体',
    parentId: '020112',
  },
  {
    id: '02011205',
    text: '其他',
    parentId: '020112',
  },

  {
    id: '0202',
    text: '3D 场景',
    children: ['020201', '020202', '020203', '020204'],
    parentId: '02',
  },
  {
    id: '020201',
    text: '自然场景',
    parentId: '0202',
  },
  // TODO：Add 现代场景
  {
    id: '020202',
    text: '古代场景',
    parentId: '0202',
  },
  {
    id: '020203',
    text: '科幻场景',
    parentId: '0202',
  },
  {
    id: '020204',
    text: '其他',
    parentId: '0202',
  },
  {
    id: '0203',
    text: '全景图片',
    children: [
      '020301',
      '020302',
      '020303',
      '020304',
      '020305',
      '020306',
      '020307',
      '020308',
    ],
    parentId: '02',
  },
  {
    id: '020301',
    text: '古建',
    parentId: '0203',
  },
  {
    id: '020302',
    text: '城市',
    parentId: '0203',
  },
  {
    id: '020303',
    text: '山川',
    parentId: '0203',
  },
  {
    id: '020304',
    text: '太空',
    parentId: '0203',
  },
  {
    id: '020305',
    text: '天空',
    parentId: '0203',
  },
  {
    id: '020306',
    text: '景点',
    parentId: '0203',
  },
  {
    id: '020307',
    text: '自然',
    parentId: '0203',
  },
  {
    id: '020308',
    text: '建筑',
    parentId: '0203',
  },
  {
    id: '0204',
    text: '全景视频',
    children: [
      '020401',
      '020402',
      '020403',
      '020404',
      '020405',
      '020406',
      '020407',
      '020408',
    ],
    parentId: '02',
  },
  {
    id: '020401',
    text: '古建',
    parentId: '0204',
  },
  {
    id: '020402',
    text: '城市',
    parentId: '0204',
  },
  {
    id: '020403',
    text: '山川',
    parentId: '0204',
  },
  {
    id: '020404',
    text: '太空',
    parentId: '0204',
  },
  {
    id: '020405',
    text: '天空',
    parentId: '0204',
  },
  {
    id: '020406',
    text: '景点',
    parentId: '0204',
  },
  {
    id: '020407',
    text: '自然',
    parentId: '0204',
  },
  {
    id: '020408',
    text: '建筑',
    parentId: '0204',
  },
]

// 根据 id, 返回 categorySet 中的 category
const findCategory = id => categorySet.find(category => category.id === id)

// 根据 category text，返回 categorySet 中的 category
const findCategoryByText = (categoryTextSet) => {
  let categoryTargetSet = []
  let parentId

  while (categoryTextSet.length > 0) {
    const currentCategoryText = categoryTextSet.shift()
    const currentCategory = categorySet.filter(
      // eslint-disable-next-line no-loop-func,no-confusing-arrow
      category =>
        !parentId
          ? category.text === currentCategoryText
          : category.text === currentCategoryText &&
            category.parentId === parentId
    )

    parentId = currentCategory[0].id

    categoryTargetSet = categoryTargetSet.concat(currentCategory)
  }

  return categoryTargetSet
}

const getChildren = (id) => {
  const category = findCategory(id)
  const children = []

  if (category && category.children) {
    const childrenIds = category.children

    childrenIds.forEach(id => children.push(findCategory(id)))
  }

  return children
}

export { categorySet, findCategory, findCategoryByText, getChildren }
