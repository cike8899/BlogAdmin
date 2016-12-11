import { handleActions } from 'redux-actions'

const initState = {};

export default handleActions({
    'get all pure tags'(state, action) {
        return action.payload;
    }
}, initState);