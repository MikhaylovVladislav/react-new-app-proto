import React from "react";
import { Form, Field, useForm } from 'react-final-form'
import { useFormState } from 'react-final-form'
import {connect} from "react-redux";
import {toAuth} from "../../redux/auth-reducer";

let LoginForm = (props) => {
    return (
        <Form
        onSubmit={values=>{
            console.log(values.login)
            props.toAuth(values.login, values.password)
        }}>
            {({handleSubmit, submitting, pristine, form})=>(
            <form onSubmit={handleSubmit}>
                <Field name="login" placeholder="login ..." component={"input"}/>
                <Field name="password" placeholder="password ..." component={"input"}/>
                <Field name="ch" type="checkbox" component={"input"}/>
                <button type="submit" disabled={submitting} > Авторизоваться</button>
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
let mapsStateToProps = (state)=>{
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapsStateToProps,{toAuth})(Login)