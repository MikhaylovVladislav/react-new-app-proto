const EDIT_NEW_POST = 'EDIT-NEW-POST';
const ADD_POST = 'ADD-POST';

let initState={
    postData: [
        {id: 1, postText: 'Excuse me bro', countLike: '27'},
        {id: 2, postText: 'Excuse ... i am not you bro', countLike: '19'}
    ],
    editNewPost: ''
}
const profileReducer=(state=initState, action)=> {

    switch (action.type) {
        case ADD_POST:{
            let stateCopy={...state}
            stateCopy.postData=[...state.postData]
            let test=stateCopy.editNewPost;
            let newPost = {id:3, postText: test, countLike: '0'};
            stateCopy.postData.push(newPost);
            stateCopy.editNewPost='';
            return stateCopy;
        }
        case EDIT_NEW_POST:{
            let stateCopy={...state}
            stateCopy.editNewPost=action.editText;
            return stateCopy;
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
export default profileReducer;