import React from "react";
import {Form, Field} from 'react-final-form'
import {connect} from "react-redux";
import {toAuth} from "../../redux/auth-reducer";
import {CustomElement} from "../Common/FormControls/FormControls";

let LoginForm = (props) => {
    let CustomInput=CustomElement('input')
    return (
        <Form
            onSubmit={values => {
                console.log(values.login)
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


                return errors
            }
            }
        >
            {({handleSubmit, submitting, pristine, form}) => (
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
    return (<div>
            <h1>Авторизация</h1>
            <LoginForm toAuth={props.toAuth}/>
        </div>
    )
}
let mapsStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapsStateToProps, {toAuth})(Login)