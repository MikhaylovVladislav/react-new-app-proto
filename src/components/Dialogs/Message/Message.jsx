import React from 'react';
import st from './../Dialogs.module.css';

const Message = (props) => {

    /*let mess = props.map(el => el.isMyMess ? <div className={st.rightMess}>{el.message}</div> : <div className={st.lestMess}>{el.message}</div>);*/
    let divka;
    if (props.isMyMess == true) {
        divka = <div className={st.right}>{props.message}</div>;
    } else {
        divka = <div className={st.left}>{props.message}</div>;
    }
    return (
        <div className={st.message}>
            {divka}

        </div>
    );
}

export default Message;