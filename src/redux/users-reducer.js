import {UserFollowAPI, UsersAPI} from "../API/API";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const SELECTED_PAGE = 'SELECTED-PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_FOLLOWING_PROGRESS="TOGGLE-FOLLOWING-PROGRESS"

let initState = {
    users: [],
    pageSize: 4,
    totalCount: 0,
    currentPage: 1,
    followed:false,
    isFetching: false,
    isFollowing: [2]
}
const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}

                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}

                    }
                    return u
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_COUNT:

            return{
                ...state,
                totalCount: action.count
            }
        case SELECTED_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROGRESS:

            return{
                ...state,
                isFollowing: action.isFetching ? [...state.isFollowing, action.userId]:[...state.isFollowing.filter(el=> el!==action.userId)]
            }
        default:
            return state;

    }
}
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count});
export const selectedPage = (page) => ({type: SELECTED_PAGE, page});
export const toggleIsFetching= (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress=(isFetching, userId)=> ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsersThunk=(currentPage, pageSize)=> {
    return dispatch => {
        dispatch(toggleIsFetching(true));
        UsersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalCount(data.totalCount));
                dispatch(toggleIsFetching(false));
            })

    }
}
export const followThunk = (userId)=>{
    return dispatch => {
        dispatch(toggleFollowingProgress(true, userId))
        UserFollowAPI.follow(userId)
            .then(data => {
                dispatch(toggleFollowingProgress(false, userId))
                dispatch(follow(userId))
            })
    }
}

export const unfollowThunk = (userId)=>{
    return dispatch => {
        dispatch(toggleFollowingProgress(true, userId))
        UserFollowAPI.unfollow(userId)
            .then(data => {
                dispatch(toggleFollowingProgress(false, userId))
                dispatch(unfollow(userId))
            })
    }
}

export default usersReducer;