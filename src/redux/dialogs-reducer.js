const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE';
const EDIT_NEW_MESSAGE = 'EDIT-NEW-MESSAGE';

let initState = {
    messagesData: [
        {id: 1, friendId: 2, isMyMess: false, messageText: 'Когда 100 рублей вернешь'},
        {id: 2, friendId: 3, isMyMess: true, messageText: 'Пошли за вискасом'},
        {id: 3, friendId: 3, isMyMess: false, messageText: 'Кабель'},
        {id: 4, friendId: 1, isMyMess: true, messageText: 'hello im Borka'},
    ],

    dialogsData: [
        {id: 1, name: 'Rijik'},
        {id: 2, name: 'Belosnejka'},
        {id: 3, name: 'Marusya'}
    ],
    editNewMessage: ''
}
const dialogsReducer = (store=initState, action) => {
    switch (action.type) {
        case ADD_MY_MESSAGE:
            let test=store.editNewMessage;
            store.messagesData.push({id: 5, friendId: 3, isMyMess: true, messageText: test});
            store.editNewMessage='';
            return store;
        case EDIT_NEW_MESSAGE:
            store.editNewMessage=action.editText;
            return store;
        default:
            console.log('none name method');
            return store;


    }
}

    export const addMyMessageActionCreator = () => ({type: ADD_MY_MESSAGE})
    export const editNewMessageActionCreator = (text) => {
        return {type: EDIT_NEW_MESSAGE, editText: text}
    }
    export default dialogsReducer;