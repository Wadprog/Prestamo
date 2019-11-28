import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR } from '../actions/Const'
const initialState= {
    token: localStorage.getItem('token'),
    isAuthenticated: null, 
    loading:true, 
    user:null
}

export default function(state=initialState, action){
    const {type, payload }=action
    switch(type){
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                user:payload
            }
        case REGISTER_SUCCESS: 
        case AUTH_ERROR:
        localStorage.setItem('token',payload.token)
        return {
            ...state,
        ...payload,
        isAuthenticated:true,
        loading:false
    }
        case REGISTER_FAIL: 
        localStorage.removeItem('token')
        return{
            ...state,
            loading:false,
            isAuthenticated:false
        }
        default:
        return state

    }

}