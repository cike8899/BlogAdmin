import { handleActions } from 'redux-actions'

let initialState = { count: 0, rows: [] };

export default handleActions({
    'get all note'(state, action) {
        return action.payload;
    },
    'add or update note'(state, action) {
        let isAdd = action.payload.isAdd;
        if (isAdd) {
            state.unshift(action.payload.note);
        }
        // else {
        //     newState = state;//无论更新是否成功都返回原来的数据
        // }
        return state;
    },
    'get notes by page'(state, action) {//这个地方不能直接返回原来的state，修改的是引用
        //这样导致React-Redux认为dispatch前后state没有改变,然后组件就不会重新渲染
        state.count = action.payload.count;
        action.payload.rows.forEach((item) => {
            if (!state.rows.some(x => x.id === item.id)) {
                state.rows.push(item);
            }
        })
        let newState = {};
        Object.assign(newState, state);
        return newState;
    },
    "add empty note"(state, action) {
        let newState = {};
        state.rows.unshift(action.payload);
        Object.assign(newState, state);
        return newState;
    }

}, initialState);