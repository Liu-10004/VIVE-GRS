import serializeFilter from './serializeFilter'

describe('serialize filter', () => {
  it('initial option', () => {
    expect(
      serializeFilter({ category: '00'})
    ).toEqual('全部')
  })
  it('no keyword', () => {
    expect(
      serializeFilter({ category: '01,0102' })
    ).toEqual('课件,高等教育')
  })
  it('has keyword', () => {
    expect(
      serializeFilter({ category: '01,0102,010201', keyword: '齐天大圣' })
    ).toEqual('课件,高等教育,工学,齐天大圣')
  })
  it('has page', () => {
    expect(
      serializeFilter({
        category: '01,0102,010201',
        keyword: '齐天大圣',
        page: 1,
      })
    ).toEqual('课件,高等教育,工学,齐天大圣')
  })
})
