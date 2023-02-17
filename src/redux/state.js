let rerenderRoot = ()=>{
    console.log('rerend');
}

let state = {
    profilePage: {
        postData: [
            {id: 1, postText: 'Excuse me bro', countLike: '27'},
            {id: 2, postText: 'Excuse ... i am not you bro', countLike: '19'}
        ],
        editNewPost: ''
    },

    dialogsPage: {
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
    },

    friends: [
        {id: 1, name: 'Rijik', online: true},
        {id: 2, name: 'Belosnejka', online: true},
        {id: 3, name: 'Marusya', online: false},
        {id: 4, name: 'Piglin', online: false},
        {id: 5, name: 'Naruto', online: true},
        {id: 6, name: 'Garry', online: false},
        {id: 7, name: 'Lavanda', online: true}
    ]


};

export let addPost = () => {
    let newPost = {id: 3, postText: state.profilePage.editNewPost, countLike: 0}
    state.profilePage.postData.push(newPost);
    state.profilePage.editNewPost = '';
   rerenderRoot(state);
}

export let editNewPost = (editText) => {
    state.profilePage.editNewPost = editText;
    rerenderRoot(state);
}

export let addMyMessage = () => {
    let newMyMessage = {id: 5, friendId: 2, isMyMess: true, messageText: state.dialogsPage.editNewMessage}
    state.dialogsPage.messagesData.push(newMyMessage);
    state.dialogsPage.editNewMessage = '';
    rerenderRoot(state);
}

export let editNewMessage = (editText) => {
    state.dialogsPage.editNewMessage=editText;
    rerenderRoot(state);
}

export const subscribe = (observer)=>{
    rerenderRoot=observer;
}

export default state;