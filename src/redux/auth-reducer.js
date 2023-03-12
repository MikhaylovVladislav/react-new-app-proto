import {AuthAPI} from "../API/API";

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA'

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
        default:
            return state;

    }
}
export const setAuthUserData = (userId, login, email) => ({type: SET_AUTH_USER_DATA, data: {userId, login, email}});

export const authThunk = ()=>{
    return dispatch => {
        AuthAPI.auth()
            .then(data => {
                let {id, login, email}=data
                dispatch(setAuthUserData(id, login, email))
            })
    }
}

/*export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});*/
export default authReducer;