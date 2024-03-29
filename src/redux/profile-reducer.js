import {ProfileAPI, UsersAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';


let initState={
    postData: [
        {id: 1, postText: 'Excuse me bro', countLike: '27'},
        {id: 2, postText: 'Excuse ... i am not you bro', countLike: '19'}
    ],
    editNewPost: '',
    profile: null,
    currentUserProfile:28288,
    status: '0000'

}
const profileReducer=(state=initState, action)=> {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 3, postText: action.text, countLike: '0'};
            return {
                ...state,
                postData: [...state.postData, newPost]
            }
        }
        case SET_USER_PROFILE: {
            return{
                ...state,
                profile: {...action.profile}
            }
        }
        case SET_USER_STATUS: {
            console.log()

            return{
                ...state,
                status: action.status
            }
        }

        default:
            console.log('none name method at Profile');
           return state;
    }
}



export const addPostAC=(text)=>({type: ADD_POST, text});

export const setUserProfile = (profile)=>({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status)=>({type: SET_USER_STATUS, status});

export const getUserProfile= (userId)=>{
    return dispatch => {
        UsersAPI.getUserById(userId)
            .then(data => {dispatch(setUserProfile(data)
            );
            })
    }
}

export const updateStatus= (status)=>{
    return dispatch => {
        ProfileAPI.updateStatus(status)
            .then(data => {dispatch(setUserStatus(status));
            })
    }
}

export const getStatus= (userId)=>{
    return dispatch => {
        ProfileAPI.getStatus(userId)
            .then(data => {dispatch(setUserStatus(data.data));
            }
            )
    }
}
export default profileReducer;