import {createSelector} from "reselect";

export const getIsFetching = (state)=>{
    return state.usersPage.isFetching
}

export const getUsersSelector = (state)=>{
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, users => users.filter(u=> true))
