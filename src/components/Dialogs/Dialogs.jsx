import React from 'react';
import st from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsItem from "./DialogItem/DialogsItem";
import {addMyMessageActionCreator, editNewMessageActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    const dialogs = props.statePage.dialogsData.map(el => <DialogsItem dName={el.name} dId={el.id}/>);
    const messages = props.statePage.messagesData.map(el => <Message message={el.messageText} isMyMess={el.isMyMess}/>);

    let refMyMess = React.createRef();
    const onAddMyMessage = () => {
        props.onAddMyMessage();
    }
    let onEditNewMessage = () => {
        let text = refMyMess.current.value;
        props.onEditNewMessage(text);
    }

    return (
        <div className={st.dialogs}>
            <div className={st.dialogItem}>
                {dialogs}
            </div>
            <div>
                <div className={st.messages}>
                    <div>
                        {messages}
                        <div>
                            <textarea onChange={onEditNewMessage} className={st.ta} ref={refMyMess} value={props.valueTA} />
                            <button className={st.toGo} onClick={onAddMyMessage}>Отправить</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dialogs;