import queryParser, { parseQueryToString } from './queryParser'

describe('parse path from router query', () => {
  it("path is '?l1=01&l2=0102&l3=010201&l4=01020106'", () => {
    expect(queryParser('?l1=01&l2=0102&l3=010201&l4=01020106')).toEqual({
      l1: '01',
      l2: '0102',
      l3: '010201',
      l4: '01020106',
    })
  })

  it("path is '?l1=01'", () => {
    expect(queryParser('?l1=01')).toEqual({ l1: '01' })
  })

  it("path is ''", () => {
    expect(queryParser('')).toEqual({})
  })
})

describe('parse query', () => {
  it('is empty', () => {
    expect(parseQueryToString('')).toEqual({
      category: '00',
      keyword: undefined,
      page: undefined,
    })
  })

  it('only has filter', () => {
    expect(parseQueryToString('?l1=01&l2=0102&l3=010203')).toEqual({
      category: '010203',
      keyword: undefined,
      page: undefined,
    })
  })

  it("has keyword and filter", () => {
    expect(parseQueryToString('?l1=01&l2=0102&l3=010203&keyword=hello')).toEqual({
      category: '010203',
      keyword: 'hello',
      page: undefined,
    })
  })

  it('contain all fields', () => {
    expect(parseQueryToString('?l1=01&l2=0102&l3=010203&keyword=hello&page=2')).toEqual({
      category: '010203',
      keyword: 'hello',
      page: '2',
    })
  })

  it('has pathname and no search', () => {
    expect(parseQueryToString('', 'collection')).toEqual({
      category: '01',
      keyword: undefined,
      page: undefined,
    })
  })

  it('has pathname and has search', () => {
    expect(
      parseQueryToString(
        '?l1=01&l2=0102&l3=010203&keyword=hello&page=2',
        'collection'
      )
    ).toEqual({
      category: '010203',
      keyword: 'hello',
      page: '2',
    })
  })
})
