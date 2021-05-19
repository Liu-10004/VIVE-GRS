/**
 * @see https://github.com/vivedu/VIVEDU-Store/issues/472
 *
 * @param  {object} 后端响应的用户信息字段
 * @return {object} 处理后和 API 定义统一的用户信息字段
 */

const parseUserInfo = ({
  id,
  email,
  identity,
  name,
  organization,
  phoneNumber,
}) => ({
  userId: id,
  email,
  role: identity,
  name,
  organization,
  phone: phoneNumber,
})

export default parseUserInfo
