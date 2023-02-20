import dialogsReducer from './dialogs-reducer';
import profileReducer from "./profile-reducer";
const ADD_MY_MESSAGE = 'ADD-MY-MESSAGE';
const EDIT_NEW_MESSAGE = 'EDIT-NEW-MESSAGE';
const EDIT_NEW_POST = 'EDIT-NEW-POST';
const ADD_POST = 'ADD-POST';

let store = {
    _state: {
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


    },
    getState(){
      return this._state;
    },
    _subscriber() {
        console.log('STORE SUBSCRIBER');
    },
    subscribe(observer) {
        //console.log(observer);
        this._subscriber = observer;
    },

    getPostData(id) {
        if (id == null) {
            return this._state.profilePage.postData;

        } else {

            return this._state.profilePage.postData[id];
        }
    },
    getMessageData(id) {
        if (id == null) {
            return this._state.dialogsPage.messagesData;
        } else {
            return this._state.dialogsPage.messagesData[id];
        }
    },
    getDialogsData(id) {
        if (id == null) {
            return this._state.dialogsPage.dialogsData;
        } else {
            return this._state.dialogsPage.dialogsData[id];
        }
    },
    setPostData(id, value, count) {
        if (this.getPostData().includes(id)) {
            console.log('Изменение');

            this._state.profilePage.postData[id].postText = value;
            this._state.profilePage.postData[id].countLike = count;
        } else {
            console.log('Доваление');
            let newPost={id: id, postText: value, countLike: count};

           this._state.profilePage.postData.push(newPost);
        }

    },


    getEditNewPost() {
        return this._state.profilePage.editNewPost;

    },

   setEditNewPost(value){
        this._state.profilePage.editNewPost=value;

    },

    addPostData(postText) {

        let lastEl = this._state.profilePage.postData.at(-1);
        let newEl = {id: lastEl.id++, postText: postText, countLike: 0}
        this.setPostData(newEl.id, newEl.postText, newEl.countLike);
    },


    setMessageData(id,friendId, isMyMess,text){
        if(this.getMessageData().includes(id)){
            this._state.dialogsPage.messagesData[id].friendId=friendId;
            this._state.dialogsPage.messagesData[id].isMyMess=isMyMess;
            this._state.dialogsPage.messagesData[id].messageText=text;
        }else{
            let newMessage={id: id, friendId: friendId, isMyMess: isMyMess, messageText: text};
            this._state.dialogsPage.messagesData.push(newMessage);
}
    },

    getEditNewMessage(){
        return this._state.dialogsPage.editNewMessage;
    },
    setEditNewMessage(value){
        this._state.dialogsPage.editNewMessage=value;
    },

    addMessageData(text){
        let lastEl=this._state.dialogsPage.messagesData.at(-1);
        let newEl={id: lastEl.id++,friendId: 2, isMуMess: true, messageText: text};
        this.setMessageData(newEl.id,newEl.friendId,newEl.isMуMess, newEl.messageText);

    },
   /* dispatch(action){
       dialogsReducer(this._state.dialogsPage, action, this);
        profileReducer(this._state.profilePage, action, store);
        
    }*/


   /* addMyMessage(){
        let test = this.getEditNewMessage();
        this.addMessageData(test);
        this.setEditNewMessage('');
        this._subscriber(this);
    },*/
    /*editNewPost(editText){
        this.setEditNewPost(editText);
        this._subscriber(this);
    },*/
  /*  editNewMessage(editText){
        this.setEditNewMessage(editText)
        this._subscriber(this);
    },*/


   /*dispatch(action){
        switch (action.type) {
            case 'ADD-POST':
                let test = this.getEditNewPost();
                this.addPostData(test);
                this.setEditNewPost('');
                this._subscriber(this);
                break;
            case 'EDIT-NEW-POST':
                this.setEditNewPost(action.editText);
                this._subscriber(this);
                break;
            /!*case ADD_MY_MESSAGE:
                let test1 = this.getEditNewMessage();
                this.addMessageData(test1);
                this.setEditNewMessage('');
                this._subscriber(this);
                break;
            case EDIT_NEW_MESSAGE:
                this.setEditNewMessage(action.editText)
                this._subscriber(this);
                break;*!/
            default:
                console.log('none name method');

        }
    }*/

    dispatch(action){
       profileReducer(action, store);
       dialogsReducer(action, store);
    }

};



/*export let addPost = () => {
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
}*/

/*export const subscribe = (observer)=>{
    rerenderRoot=observer;
}*/






export default store;