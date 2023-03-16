const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE';

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
const dialogsReducer = (state=initState, action) =>{

    switch (action.type) {
        case ADD_MY_MESSAGE:{
            return {
             ...state,
                messagesData: [...state.messagesData, {id: 5, friendId: 3, isMyMess: true, messageText: action.text}]
            }
        }

        default:
            console.log('none name method at Dialogs');
            return state;


    }
}

    export const addMyMessageAC = (text) => ({type: ADD_MY_MESSAGE, text})

    export default dialogsReducer;