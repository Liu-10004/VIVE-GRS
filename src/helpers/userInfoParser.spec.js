import parseUserInfo from './userInfoParser'

describe('parse userInfo', () => {
  it('is requested', () => {
    expect(parseUserInfo({
      email: null,
      id: "2c92838466f6c5450166f835c31c0000",
      identity: null,
      name: null,
      organization: null,
      phoneNumber: "15901234114",
    })
  ).toEqual({
      userId: "2c92838466f6c5450166f835c31c0000",
      role: null,
      name: null,
      organization: null,
      email: null,
      phone: "15901234114"
    })
  })
})
