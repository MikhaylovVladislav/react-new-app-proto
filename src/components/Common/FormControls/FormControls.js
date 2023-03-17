import stCurr from "./FormConstrols.module.css"
import React, {Component} from "react";

export const CustomTA = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;

    return (
        <div>{hasError && <span className={stCurr.errorSpan}>{meta.error}</span>} <textarea {...input}
                                                                                            className={props.st + " " + (hasError ? stCurr.error : "")} {...props} />
        </div>
    )
}



export const CustomElement = (Component) => ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;

    return (<div>{hasError && <span className={stCurr.errorSpan}>{meta.error}</span>} <Component {...input}
                                                                                                     className={props.st + " " + (hasError ? stCurr.error : "")} {...props}/></div>)


}