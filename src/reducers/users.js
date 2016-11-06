import { handleActions } from 'redux-actions'
import cookies from 'js-cookie';

const initialState = [{
    userName: "",
    token: "",
}]

export default handleActions({
    'login'(state, action) {
        console.info(action.payload);
    },
    'logout'(state, action) {
        console.info(action.payload);
    }
}, initialState);