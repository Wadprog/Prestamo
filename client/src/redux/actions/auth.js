import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_FAIL } from './Const'
import { setAlert } from './alert'
//register user
export const register = ({ name, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ name, password })
  try {
    const res = await axios.post('api/user', body, config)
    console.log(res)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    console.log(` Error registering ${error}`)
     const errors = error.response.data.errors
    if (errors) {
     errors.forEach(err => dispatch(setAlert(err.msg, 'danger')))
    }
    dispatch({
      type: REGISTER_FAIL
    })
  }
}
