const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE';
const EDIT_NEW_MESSAGE = 'EDIT-NEW-MESSAGE';
const dialogsReducer = (action, store) => {
    switch (action.type) {
        case ADD_MY_MESSAGE:
            let test1 = store.getEditNewMessage();
            store.addMessageData(test1);
            store.setEditNewMessage('');
            store._subscriber(store);
            break;
        case EDIT_NEW_MESSAGE:
            store.setEditNewMessage(action.editText)
            store._subscriber(store);
            break;
        default:
            console.log('none name method');


    }
}

    export const addMyMessageActionCreator = () => ({type: ADD_MY_MESSAGE})
    export const editNewMessageActionCreator = (text) => {
        return {type: EDIT_NEW_MESSAGE, editText: text}
    }
    export default dialogsReducer;