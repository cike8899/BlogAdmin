import { handleActions } from 'redux-actions'
import cookies from 'js-cookie';

const initialState = [{
    userName: "",
    token: "",
}]

export default handleActions({
    'login'(state, action) {
        //登录成功后将token存到cookie
        let newState;
        if (action.payload.success === true) {
            let token = action.payload.token;
            cookies.set('token', token, { expires: 7 });
            newState = [...state, { userName: action.payload.userName, token: token }];
        } else {
            newState = state;
        }
        console.info(action.payload);
        return newState;
    },
    'logout'(state, action) {
        let token = cookies.get("token");
        if (token !== "" || token !== null || token !== undefined) {
            cookies.remove("token");
        }
        console.info(action.payload);
    }
}, initialState);