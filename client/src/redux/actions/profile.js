import axios from 'axios'
import {
  PROFILE_FETCH_REQUEST,
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAIL,
  FILTER
} from './Const'
export const filterProfiles = (value, profiles) => async dispatch => {
  let filter = profiles.filter(
    item =>
      !item.name
        .trim()
        .toLowerCase()
        .indexOf(value.trim().toLowerCase())
  )
  console.log(`Amen ${profiles[0]} and the filter is ${filter}`)
  dispatch({
    type: FILTER,
    payload: filter
  })
}
export const loadProfiles = () => async dispatch => {
  dispatch({
    type: PROFILE_FETCH_REQUEST
  })
  try {
    const res = await axios.get('/api/profile')
    dispatch({
      type: PROFILE_FETCH_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: PROFILE_FETCH_FAIL
    })
  }
}
