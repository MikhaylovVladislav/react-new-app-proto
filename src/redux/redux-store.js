import {createStore, combineReducers} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let state= combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

const store = createStore(state);



export default store;
/*
dispatch(action) {
    profileReducer(this,action);
    dialogsReducer(this, action);
    this._subscriber(this);
}*/
