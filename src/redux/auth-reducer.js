import {AuthAPI} from "../API/API";
const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_LOG_SUCCESS_DATA = 'SET-LOG-SUCCESS-DATA';
const SET_INIT_SUCCESS = 'SET_INIT_SUCCESS';


let initState = {
    userId: null,
    login: null,
    email: null,
    isAuth: true,
    isLogSuccess: true,
    messageResult: null,
    initSuccess: false
}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA :
            return {
                ...state, ...action.data

            }
        case SET_LOG_SUCCESS_DATA:
            return {
                ...state,
                isLogSuccess: action.isLogSuccess,
                messageResult: action.messageResult
            }
        case SET_INIT_SUCCESS :
            return {
                ...state,
                initSuccess: action.status
            }
        default:
            return state;

    }
}
export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, login, email, isAuth}
});

export const setLogSuccessData=(message, bool) => ({type: SET_LOG_SUCCESS_DATA, messageResult: message, isLogSuccess: bool})
export const setInitSuccessData = (bool) => ({
    type: SET_INIT_SUCCESS,
    status: bool
});

export const getAuthUserData2 = () => {
    return dispatch => {
        console.log("auth");
        AuthAPI.auth()
            .then(data => {
                    let {id, login, email} = data.data;
                     dispatch(setAuthUserData(id, login, email, true))
                console.log("auth")
            })

    }
}

export const getAuthUserData = () => {

    return dispatch => {
        const promises =  [dispatch(getAuthUserData2())];
        Promise.all(promises).then( val =>{console.log("then auth in");dispatch(setInitSuccessData(true))})
    }
}

export const initApp = () => {

    return dispatch => {
        const promises =  [dispatch(getAuthUserData())];
        Promise.all(promises).then( val =>{console.log("then auth");dispatch(setInitSuccessData(true))})
    }
}
export const toAuth = (email, password, rememberMe) => {

    return dispatch => {
        AuthAPI.authLogin(email, password, rememberMe)
            .then(data => {
                    if (data.data.resultCode === 0) {
                        dispatch(setLogSuccessData(null,true))
                        dispatch(getAuthUserData())
                    } else {
                        console.log("error auth")
                        let mR=data.data.messages;
                         dispatch(setLogSuccessData(mR.length>1? "SomeProblem":mR,false))
                    }
}
)
}
}

export const toLoginOut = () => {
    return dispatch => {
        AuthAPI.authLoginOut()
            .then(data => {
                dispatch(setAuthUserData(null, null, null, false))
            })
    }

}

/*export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});*/
export default authReducer;