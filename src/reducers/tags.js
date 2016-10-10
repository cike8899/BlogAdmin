import {handleActions} from 'redux-actions'
import {postTag, getAllTags} from '../services/tagApi';

const initialState = [
    {
        text: 'empty',
        completed: false,
        id: 0
    }
]

export default handleActions({
    'add tag' (state, action) {
        return [
            {
                id: state.reduce((maxId, tag) => Math.max(tag.id, maxId), -1) + 1,
                completed: false,
                text: action.payload
            },
            ...state
        ];
    },
    'edit tag' (state, action) {},
    'get all tags' (state, action) {
        return action.payload; //action.payload  是后台返回的数据
    }
}, initialState)