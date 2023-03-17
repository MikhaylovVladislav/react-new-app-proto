import React from 'react';
import st from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsItem from "./DialogItem/DialogsItem";
import {Form, Field} from "react-final-form";
import {maxLengthThunk, required} from "../../utils/validators/validators";
import {CustomTA} from "../Common/FormControls/FormControls";

const Dialogs = (props) => {
    const dialogs = props.dialogsPage.dialogsData.map(el => <DialogsItem key={el.id} dName={el.name} dId={el.id}/>);
    const messages = props.dialogsPage.messagesData.map(el => <Message key={el.id} message={el.messageText}
                                                                       isMyMess={el.isMyMess}/>);
let maxLength30 = maxLengthThunk(30)
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)
    return (

        <div className={st.dialogs}>
            <div className={st.dialogItem}>
                {dialogs}
            </div>
            <div>
                <div className={st.messages}>
                    <div>
                        {messages}
                        <Form
                            onSubmit={values => {
                                props.onAddMyMessage(values.messageTA)
                            }}

                        >
                            {({handleSubmit, submitting}) => (
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <Field name="messageTA" validate={composeValidators(maxLength30, required)} st={st.ta} component={CustomTA}/>
                                        <button type="submit" disabled={submitting} className={st.toGo}>Отправить
                                        </button>
                                    </div>
                                </form>)}
                        </Form>
                    </div>

                </div>

            </div>

        </div>

    );
}

export default Dialogs;