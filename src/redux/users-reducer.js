const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

let initialSate = {
    users: [
        {id: 1, photoUrl: 'https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg',
            followed: false, name: 'Alex', status: '111 wqa hi, my friend', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 2, photoUrl: 'https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg',
            followed: true, name: 'Demix', status: '222 wqa hi, my friend', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 3, photoUrl: 'https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg',
            followed: true, name: 'Demix', status: '222 wqa hi, my friend', location: {city: 'Kiev', country: 'Ukraine'}},
        {id: 4, photoUrl: 'https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg',
            followed: false, name: 'Zima', status: '333 wqa hi, my friend', location: {city: 'Kiev', country: 'Ukraine'}}
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