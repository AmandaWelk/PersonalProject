const initialState = {
    member: {}
}

const GET_MEMBER = 'GET_MEMBER';
const CLEAR_USER = 'CLEAR_USER';

export function getMember(memberObj) {
    return {
        type: GET_MEMBER,
        payload: memberObj
    }
}

export function clearUser() {
    return {
        type: CLEAR_USER,
        payload: {}
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case GET_MEMBER:
            return {...state, member: payload};
        case CLEAR_USER:
            return {...state, member: payload};
        default:
            return state;
    }
}