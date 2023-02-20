const EDIT_NEW_POST = 'EDIT-NEW-POST';
const ADD_POST = 'ADD-POST';
const profileReducer=(action, store)=> {

    switch (action.type) {
        case 'ADD-POST':
            let test = store.getEditNewPost();
            store.addPostData(test);
            store.setEditNewPost('');
            store._subscriber(store);
            break; //return
        case 'EDIT-NEW-POST':
            store.setEditNewPost(action.editText);
            store._subscriber(store);
            let ENP=store.getEditNewPost();
            break;//return
        default:
           // console.log('none name method');
    }
}

export const addPostActionCreator=()=>({type: ADD_POST});
export const editNewPostTextActionCreator = (text)=>{
    return { type: EDIT_NEW_POST, editText: text}
};
export default profileReducer;