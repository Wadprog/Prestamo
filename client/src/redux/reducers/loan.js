import { LOAN_FETCH_FAIL, LOAN_FETCH_SUCCESS } from '../actions/Const'
const initialState = {
  loans: null,
  loading: true
}

export default function(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case LOAN_FETCH_SUCCESS:
      return {
        ...state,
        loans: payload,
        loading: false
      }
    case LOAN_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        loans: null
      }
    default:
      return { ...state }
  }
}
