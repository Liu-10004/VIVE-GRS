export const member = {
  type: { error: false, value: '', validator: '指导老师|参赛老师|参赛学生' },
  name: { error: false, value: '', validator: null },
  dept: { error: false, value: '', validator: null },
  phone: { error: false, value: '', validator: '^(13[0-9]|14[5|7]|15[0-9]|16[0-9]|17[0-9]|18[0-9]|19[0-9])\\d{8}$' },
  // eslint-disable-next-line  no-useless-escape
  identityNum: { error: false, value: '', validator: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/ },
}

export const school = {
  name: { error: false, value: '', validator: null },
  dept: { error: false, value: '', validator: null },
  // teacher: { error: false, value: '', validator: null },
  // job: { error: false, value: '', validator: null },
  // phone: { error: false, value: '', validator: '^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$' },
}
