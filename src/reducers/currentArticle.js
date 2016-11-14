import { handleActions } from 'redux-actions'

const initialState = {
    title: "",
    content: "",
    tags: []
}

export default handleActions({
    'add article'(state, action) {
        return {
            title: "",
            content: "",
            tags: []
        }
    },
    'select article'(state, action) {
        return action.payload;
    }
}, initialState);
