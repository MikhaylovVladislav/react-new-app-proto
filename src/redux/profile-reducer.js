import {UsersAPI} from "../API/API";

const EDIT_NEW_POST = 'EDIT-NEW-POST';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initState={
    postData: [
        {id: 1, postText: 'Excuse me bro', countLike: '27'},
        {id: 2, postText: 'Excuse ... i am not you bro', countLike: '19'}
    ],
    editNewPost: '',
    profile: null,
    currentUserProfile:2
}
const profileReducer=(state=initState, action)=> {

    switch (action.type) {
        case ADD_POST:{
            let test=state.editNewPost;
            let newPost = {id:3, postText: test, countLike: '0'};
            return {
                ...state,
                editNewPost: '',
                postData: [...state.postData, newPost]
            };
        }
        case EDIT_NEW_POST:{
            return {
                ...state,
                editNewPost: action.editText
            };
        }
        case SET_USER_PROFILE: {
            return{
                ...state,
                profile: {...action.profile}
            }
        }
        default:
            console.log('none name method at Profile');
           return state;
    }
}



export const addPostActionCreator=()=>({type: ADD_POST});
export const editNewPostTextActionCreator = (text)=>{
    return { type: EDIT_NEW_POST, editText: text}
};
export const setUserProfile = (profile)=>({type: SET_USER_PROFILE, profile});

export const getUser= (userId)=>{
    return dispatch => {
        UsersAPI.getUserById(userId)
            .then(data => {dispatch(setUserProfile(data));
            })
    }
}
export default profileReducer;