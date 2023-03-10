import {createStore, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let state= combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

const store = createStore(state);

export default store;
/*
dispatch(action) {
    profileReducer(this,action);
    dialogsReducer(this, action);
    this._subscriber(this);
}*/
