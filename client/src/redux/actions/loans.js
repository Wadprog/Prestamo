import axios from 'axios'
import { LOAN_FETCH_FAIL, LOAN_FETCH_SUCCESS } from './Const'

export const loadLoans = () => async dispatch => {
  try {
    const res = await axios.get('/api/loan')
    dispatch({
      type: LOAN_FETCH_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type: LOAN_FETCH_FAIL
    })
  }
}
