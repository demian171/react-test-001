const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

let initialSate = {
    users: [
        {
            id: 1,
            followed: false,
            name: 'Alex',
            status: 5,
            message: '111 wqa hi, my friend',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }
        },
    ]
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
        default:
            return state;
    }
}

//Action Creators
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SETUSERS, users})

export default usersReducer;