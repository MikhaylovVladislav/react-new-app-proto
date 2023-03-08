const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const SELECTED_PAGE = 'SELECTED-PAGE'

let initState = {
    users: [],
    pageSize: 4,
    totalCount: 0,
    currentPage: 1
}
const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}

                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}

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
        default:
            return state;

    }
}
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setTotalCountAC = (count) => ({type: SET_TOTAL_COUNT, count});
export const selectedPageAC = (page) => ({type: SELECTED_PAGE, page});
export default usersReducer;