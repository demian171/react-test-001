const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

let initialSate = {
    users: []
};

const usersReducer = (state = initialSate, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        }
        case SETUSERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

//Action Creators
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SETUSERS, users})

export default usersReducer;