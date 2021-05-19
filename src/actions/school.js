
import { createAction } from 'redux-actions'
import request from 'lib/request'

// 添加/修改报名信息
export const ADD_SCHOOL = 'APP/ADD_SCHOOL'
export const addSchool = createAction(ADD_SCHOOL, (data) => {
  const token = localStorage.getItem('rms-token')
  const userId = localStorage.getItem('userId')

  return request('/api/schools', {
    method: 'POST',
    body: { ...data, userId },
    headers: {
      Authorization: token,
    },
  })
})

// 获取报名学校信息
export const FETCH_SCHOOL = 'APP/FETCH_SCHOOL'
export const fetchSchool = createAction(FETCH_SCHOOL, () => {
  const userId = localStorage.getItem('userId')
  const token = localStorage.getItem('rms-token')
  return request(`/api/schools/user_id/${userId}/latest`, {
    headers: {
      Authorization: token,
    } })
})


// 修改名学校信息
export const EDIT_SCHOOL = 'APP/EDIT_SCHOOL'
export const editSchool = createAction(EDIT_SCHOOL, (data) => {
  const userId = localStorage.getItem('userId')
  const token = localStorage.getItem('rms-token')
  console.log('put')
  return request('/api/schools', {
    method: 'PUT',
    body: { ...data, userId },
    headers: {
      Authorization: token,
    } })
})
