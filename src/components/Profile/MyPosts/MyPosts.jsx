import React from 'react';
import st from './MyPosts.module.css';
import Post from './Post/Post';
import {Form, Field} from "react-final-form";
import {CustomTA} from "../../Common/FormControls/FormControls";

const MyPosts = (props) => {
    let postElements = props.profilePage.postData.map(p => <Post key={p.id} message={p.postText}
                                                                 countLike={p.countLike}/>);

    return (
        <Form
            onSubmit={values => {
                props.onAddPost(values.postTA)
            }
            }
            validate={values => {
                const errors={}
                if(!values.postTA){
                    errors.postTA="Required"
                }
                if(values.postTA && values.postTA.length>30){
                    errors.postTA="Max length 30"
                }
                return errors

            }
            }>
            {({handleSubmit, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className={st.myPosts}>
                            My posts
                        </div>
                        <div>
                            <Field name="postTA" component={CustomTA}/>

                            <button type="submit" disabled={submitting}>Add post</button>
                        </div>
                        {postElements}
                    </div>
                </form>)}
        </Form>

    );
}

export default MyPosts;