import React from 'react';
import st from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {
    const dialoges = props.state.dialogsData.map(el => <DialogsItem dName={el.name} dId={el.id}/>);
    const messages = props.state.messagesData.map(el => <Message message={el.messageText} isMyMess={el.isMyMess}/>);
    let refMyMess = React.createRef();
    const addMyMessage = () => {
        props.addMyMessage();
    }

    let editNewMessage = () => {
        let text = refMyMess.current.value;
        props.editMessageText(text);
    }
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
                            <textarea onChange={editNewMessage} className={st.ta} ref={refMyMess} value={props.state.editNewMessage} />
                            <button className={st.toGo} onClick={addMyMessage}>Отправить</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dialogs;