import React from "react";
import {Form, Field} from 'react-final-form'
import {connect} from "react-redux";
import {toAuth} from "../../redux/auth-reducer";
import {CustomElement} from "../Common/FormControls/FormControls";
import {Navigate} from "react-router-dom";

let LoginForm = (props) => {
    let CustomInput=CustomElement('input')
    return (
        <Form
            onSubmit={values => {
               props.toAuth(values.login, values.password)
            }}


            validate={values => {
                const errors = {}
                if(!values.login){
                    errors.login="Required"
                }
                if(!values.password){
                    errors.password="Required"
                }
                if(values.login && values.login.length > 50){
                    errors.login="Max length 50"
                }
                if(values.login && values.login.length < 4){
                    errors.login="Min length 4"
                }
                if(values.password && values.password.length > 20){
                    errors.password="Max length 20"
                }

                if(values.password && values.password.length <6){
                    errors.password="Min length 6"
                }
                if(!props.isLogSuccess){

                    errors.password=props.messageResult
                }
                return errors
            }
            }
        >
            {({handleSubmit, submitting, pristine, form, submitError}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="login" placeholder="login ..." component={CustomInput}/>
                    <Field name="password" placeholder="password ..." type="password" component={CustomInput}/>
                    <Field name="ch" type="checkbox" component={"input"}/>
                    <button type="submit" disabled={submitting}> Авторизоваться</button>
                </form>)}

        </Form>
    )
}

let Login = (props) => {
    if (props.isAuth) {
        return <Navigate to={'/profile/'+props.userId}/>
    } else {
        return (<div>
                <h1>Авторизация</h1>

                <LoginForm toAuth={props.toAuth} isLogSuccess={props.isLogSuccess} messageResult={props.messageResult} />
            </div>
        )
    }
}
let mapsStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isLogSuccess: state.auth.isLogSuccess,
        messageResult: state.auth.messageResult,
        userId: state.auth.userId
    }
}

export default connect(mapsStateToProps, {toAuth})(Login)