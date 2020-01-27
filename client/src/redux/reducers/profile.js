import {
  PROFILE_FETCH_REQUEST,
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAIL,
  FILTER, 
  PROFILE_SAVE_REQUEST, 
  PROFILE_SAVE_SUCCESS, 
  PROFILE_SAVE_FAIL
} from '../actions/Const'
const initialState = {
  isLoading: false,
  profiles: [],
  filteredProfiles: []
}
export default function(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case PROFILE_FETCH_REQUEST:
    case PROFILE_SAVE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
      case PROFILE_SAVE_SUCCESS: 
       return {
         ...state, 
         isLoading:false, 
         profiles: {...state.profiles, payload},
         filteredProfiles: {...state.filteredProfiles, payload},

       }

    case PROFILE_FETCH_SUCCESS:

      return {
        ...state,
        isLoading: false,
        profiles: payload,
        filteredProfiles: payload
      }
    case PROFILE_SAVE_FAIL:
      return {
        ...state,
        isLoading:false 
      }  
    case PROFILE_FETCH_FAIL:
      return {
        isLoading: false,
        profiles: []
      }
    case FILTER:
      return {
        ...state,
        filteredProfiles: payload
      }
    default:
      return { ...state }
  }
}
