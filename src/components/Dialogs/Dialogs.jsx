import React from 'react';
import st from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsItem from "./DialogItem/DialogsItem";
import {addMyMessageActionCreator, editNewMessageActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    const dialoges = props.store.getDialogsData().map(el => <DialogsItem dName={el.name} dId={el.id}/>);
    const messages = props.store.getMessageData().map(el => <Message message={el.messageText} isMyMess={el.isMyMess}/>);
    let refMyMess = React.createRef();
    const addMyMessage = () => {
        //props.store.addMyMessage();

        props.store.dispatch(addMyMessageActionCreator());
    }



    let editNewMessage = () => {
        let text = refMyMess.current.value;
       // props.store.editNewMessage(text);
        props.store.dispatch(editNewMessageActionCreator(text));
    }

    let valueTextArea = props.store.getEditNewMessage();
    return (
        <div className={st.dialogs}>
            <div className={st.dialogItem}>
                {dialoges}
            </div>
            <div>
                <div className={st.messages}>
                    <div>
                        {messages}
                        <div>
                            <textarea onChange={editNewMessage} className={st.ta} ref={refMyMess} value={valueTextArea} />
                            <button className={st.toGo} onClick={addMyMessage}>Отправить</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dialogs;