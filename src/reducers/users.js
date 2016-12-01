import { handleActions } from 'redux-actions'
import cookies from 'js-cookie';
import { hashHistory } from 'react-router';

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
            // cookies.set('token', token, { expires: 7 });
            newState = [...state, { userName: action.payload.userName, token: token }];
            // hashHistory.push("/article");
        } else {
            newState = state;
        }
        console.info(action.payload);
        return newState;
    },
    'logout'(state, action) {
        if (action.payload.success) {
            let token = cookies.get("token");//这个也可以直接放在userApi那边操作
            if (token !== "" || token !== null || token !== undefined) {
                cookies.remove("token");
            }
        } else {
            console.info("退出失败！");
        }
    }
}, initialState);