const EDIT_NEW_POST = 'EDIT-NEW-POST';
const ADD_POST = 'ADD-POST';

let initState={
    postData: [
        {id: 1, postText: 'Excuse me bro', countLike: '27'},
        {id: 2, postText: 'Excuse ... i am not you bro', countLike: '19'}
    ],
    editNewPost: ''
}
const profileReducer=(store=initState, action)=> {

    switch (action.type) {
        case 'ADD-POST':
            let test=store.editNewPost;
            store.postData.push({id:3, postText: test, countLike: '0'});
            store.editNewPost='';
            return store;
        case 'EDIT-NEW-POST':

            store.editNewPost=action.editText;
            return store;
        default:
           return store;
    }
}



export const addPostActionCreator=()=>({type: ADD_POST});
export const editNewPostTextActionCreator = (text)=>{
    return { type: EDIT_NEW_POST, editText: text}
};
export default profileReducer;