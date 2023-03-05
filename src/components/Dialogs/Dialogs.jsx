import React from 'react';
import st from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsItem from "./DialogItem/DialogsItem";


const Dialogs = (props) => {
    const dialogs = props.dialogsPage.dialogsData.map(el => <DialogsItem key={el.id}  dName={el.name} dId={el.id}/>);
    const messages = props.dialogsPage.messagesData.map(el => <Message key={el.id}  message={el.messageText} isMyMess={el.isMyMess}/>);


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
                            <textarea onChange={onEditNewMessage} className={st.ta} ref={refMyMess} value={props.dialogsPage.editNewMessage} />
                            <button className={st.toGo} onClick={onAddMyMessage}>Отправить</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dialogs;