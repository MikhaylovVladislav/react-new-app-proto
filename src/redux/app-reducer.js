import {AuthAPI} from "../API/API";
const SET_INIT_SUCCESS = 'SET_INIT_SUCCESS';



let initState = {
    initSuccess: false

}
const appReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_INIT_SUCCESS :
            return {
                ...state,
                initSuccess: action.status
            }
        default:
            return state;

    }
}
export const setInitSuccessData = (bool) => ({
    type: SET_INIT_SUCCESS,
    status: bool
});
export const initData = () => {
    return dispatch => {
        let promise = AuthAPI.auth()
            .then(data => {
            })
        Promise.all([promise]).then(dispatch(setInitSuccessData(true)))
    }
}






export default appReducer;