import stCurr from "./FormConstrols.module.css"
import React from "react";

export const CustomTA = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;

    return (
        <div>{hasError && <span className={stCurr.errorSpan}>{meta.error}</span>} <textarea {...input}
                                                                                            className={props.st + " " + (hasError ? stCurr.error : "")} {...props} />
        </div>
    )
}



export const CustomElement = (Component) => ({input, meta, ...props}) => {
    let hasError = meta.touched && (meta.error|| meta.submitError);

    return (<div>{hasError && <span className={stCurr.errorSpan}>{meta.error|| meta.submitError}</span>} <Component {...input}
                                                                                                     className={props.st + " " + (hasError ? stCurr.error : "")} {...props}/>
        {meta.submitError && <div className="error">{meta.submitError} ss</div>}</div>)


}