const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE';
const EDIT_NEW_MESSAGE = 'EDIT-NEW-MESSAGE';

let initState = {
    messagesData: [
        {id: 1, friendId: 2, isMyMess: false, messageText: 'Я сегодня не выйду'},
        {id: 2, friendId: 3, isMyMess: true, messageText: 'Пошли за вискасом'},
        {id: 3, friendId: 3, isMyMess: false, messageText: 'Заманил'},
        {id: 4, friendId: 1, isMyMess: true, messageText: 'hello im Borka'},
    ],

    dialogsData: [
        {id: 1, name: 'Rijik'},
        {id: 2, name: 'Belosnejka'},
        {id: 3, name: 'Marusya'}
    ],
    editNewMessage: ''
}
const dialogsReducer = (state=initState, action) => {
    switch (action.type) {
        case ADD_MY_MESSAGE:{
            let stateCopy={...state}
            stateCopy.messagesData=[...state.messagesData]
            let test=stateCopy.editNewMessage;
            let newMessage = {id: 5, friendId: 3, isMyMess: true, messageText: test};
          stateCopy.messagesData.push(newMessage);
            stateCopy.editNewMessage ='';
            return stateCopy;
        }
        case EDIT_NEW_MESSAGE:{
            let stateCopy={...state}
            stateCopy.editNewMessage=action.editText;
            return stateCopy;
        }
        default:
            console.log('none name method at Dialogs');
            return state;


    }
}

    export const addMyMessageActionCreator = () => ({type: ADD_MY_MESSAGE})
    export const editNewMessageActionCreator = (text) => {
        return {type: EDIT_NEW_MESSAGE, editText: text}
    }
    export default dialogsReducer;