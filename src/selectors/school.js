import { createSelector } from 'reselect'

const selectSchoolDomain = state => state.get('school')

const selectSchoolEntity = createSelector(selectSchoolDomain, school =>
  school.get('entities')
)

export const selectSchoolInfo = createSelector(
  selectSchoolEntity,
  (entities) => {
    const userId = localStorage.getItem('userId')
    return entities.get(userId)
  }
)
