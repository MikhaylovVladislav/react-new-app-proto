import {AuthAPI} from "../API/API";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_IS_AUTH="SET-IS-AUTH";

let initState = {
    userId: null,
    login: null,
    email: null,
    authId: null,
    isAuth: false
}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA :
            return {
                ...state, ...action.data,
                authId: action.data.userId,
                isAuth: true
            }
        case SET_IS_AUTH:
            return{
                ...state,
                isAuth: action.bool
            }
        default:
            return state;

    }
}
export const setAuthUserData = (userId, login, email) => ({type: SET_AUTH_USER_DATA, data: {userId, login, email}});
export const setIsAuth = (bool)=>({type: SET_IS_AUTH, bool})

export const getAuthUserData = ()=>{
    return dispatch => {
        AuthAPI.auth()
            .then(data => { if(data) {
                let {id, login, email} = data
                dispatch(setAuthUserData(id, login, email))
            }})
    }
}

export const toAuth = (email, password, rememberMe)=>{
    return dispatch => {
        AuthAPI.authLogin(email, password, rememberMe)
            .then(data=> {if(data.resultCode===0){ getAuthUserData(); dispatch(setIsAuth(true)) }else {console.log("errorAuth")}})
    }
}
export const toLoginOut = ()=>{
    return dispatch =>{
        AuthAPI.authLoginOut()
            .then(data=> {dispatch(setIsAuth(false))})
    }

}

/*export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});*/
export default authReducer;