import { handleActions } from 'redux-actions'
import { postTag, getAllTags } from '../services/tagApi';

const initialState = [
    {
        text: 'empty',
        completed: false,
        id: 0
    }
]

export default handleActions({
    'add tag'(state, action) {
        // state[0].rows.push(action.payload);
        // state[0].count++;
        // return state;
        // return [
        //     {
        //         id: state.reduce((maxId, tag) => Math.max(tag.id, maxId), -1) + 1,
        //         completed: false,
        //         text: action.payload
        //     },
        //     ...state
        // ];
        // return [];
        let rows = action.payload.data.rows.map(x => {
            return {
                id: x.id,
                name: x.name,
                createdAt: x.createdAt,
                updatedAt: x.updatedAt,
                noteCount: x.notes.length
            }
        });
        // return action.payload; //action.payload  是后台返回的数据
        return [{ rows: rows, count: action.payload.data.count, operationType: action.payload.operationType }];
    },
    'edit tag'(state, action) { },
    'get all tags'(state, action) {
        let tags = action.payload.map(x => {
            return {
                id: x.id,
                name: x.name,
                createdAt: x.createdAt,
                updatedAt: x.updatedAt,
                noteCount: x.notes.length
            }
        });
        // return action.payload; //action.payload  是后台返回的数据
        return tags;
    },
    'get tags by page'(state, action) {
        let rows = action.payload.rows.map(x => {
            return {
                id: x.id,
                name: x.name,
                createdAt: x.createdAt,
                updatedAt: x.updatedAt,
                noteCount: x.notes.length
            }
        });
        // return action.payload; //action.payload  是后台返回的数据
        return [{ rows: rows, count: action.payload.count, operationType: "getTagsByPage" }];
    },
    'del tag by id'(state, action) {

    },
}, initialState)