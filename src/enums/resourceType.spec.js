import { findCategoryByText } from './ResourceType'

describe('find category by text', () => {
  it("category text set is ['全景视频', '城市']", () => {
    expect(findCategoryByText(['全景视频', '城市'])).toEqual([
      {
        id: '0204',
        text: '全景视频',
        parentId: '02',
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
      },
      {
        id: '020402',
        text: '城市',
        parentId: '0204',
      },
    ])
  })

  it("category text set is ['全景图片', '城市']", () => {
    expect(findCategoryByText(['全景图片', '城市'])).toEqual([
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
        id: '020302',
        text: '城市',
        parentId: '0203',
      },
    ])
  })

  it("category text set is ['课件', '义务教育', '德育', '社会主义核心价值观']", () => {
    expect(
      findCategoryByText(['课件', '义务教育', '德育', '社会主义核心价值观'])
    ).toEqual([
      {
        id: '01',
        text: '课件',
        children: ['0101', '0102'],
      },
      {
        id: '0101',
        text: '义务教育',
        children: ['010101', '010102', '010103', '010104'],
        parentId: '01',
      },
      {
        id: '010102',
        text: '德育',
        children: ['01010201', '01010202', '01010203', '01010204', '01010205'],
        parentId: '0101',
      },
      {
        id: '01010202',
        text: '社会主义核心价值观',
        parentId: '010102',
      },
    ])
  })
})
