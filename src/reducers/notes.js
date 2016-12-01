import { handleActions } from 'redux-actions'

let initialState = {
    count: 0,
    rows: [],
    selectedNote:
    {
        id: null,
        title: "",
        content: "",
        createdAt: "",
        updatedAt: "",
        tags: []
    }
};

export default handleActions({
    'get all note'(state, action) {
        return action.payload;
    },
    'add or update note'(state, action) {
        let isAdd = action.payload.isAdd;
        if (isAdd) {//删除row里面存在的empty
            state.rows.splice(0, 1, action.payload.note);
            // state.unshift(action.payload.note);
            state.selectedNote = action.payload.note;
            state.count++;
        }
        else {
            let data = action.payload.ret;
            let selectedNote = state.selectedNote;
            if (data.success) {//更新失败
                state.selectedNote = state.rows.filter(x => x.id === selectedNote.id)[0];
                state.selectedNote.msg = "update failed";
            } else {
                let prepareRow = state.rows.filter(x => x.id === selectedNote.id)[0];
                let idx = state.rows.indexOf(prepareRow);
                state.rows.splice(idx, 1, selectedNote);//替换原来位置的数据
                state.selectedNote.msg = "update succeed";
            }
        }
        let newState = {};
        Object.assign(newState, state);
        return newState;
    },
    'get notes by page'(state, action) {//这个地方不能直接返回原来的state，修改的是引用
        //这样导致React-Redux认为dispatch前后state没有改变,然后组件就不会重新渲染
        state.count = action.payload.count;
        action.payload.rows.forEach((item) => {
            if (!state.rows.some(x => x.id === item.id)) {
                state.rows.push(item);
            }
        })
        if (state.count > 0) {
            // state.selectedNote = state.rows[0];
            let newNote = {};
            Object.assign(newNote, state.rows[0]);
            state.selectedNote = newNote;//深拷贝
        }
        let newState = {};
        Object.assign(newState, state);
        return newState;
    },
    "add empty note"(state, action) {
        let newState = {};
        if (state.rows.length > 0 && state.rows.some(x => x.id === "empty")) {
            newState = state;
        } else {
            state.rows.unshift(action.payload);
            state.selectedNote = action.payload;
            Object.assign(newState, state);
        }

        return newState;
    },
    "update note title"(state, action) {
        let note = action.payload;
        state.selectedNote = note;
        let newState = {};
        Object.assign(newState, state);
        return newState;
    },
    'update selected note'(state, action) {
        let id = action.payload;
        let note = state.rows.filter(x => x.id === id)[0];
        let newNote = {};
        Object.assign(newNote, note);
        state.selectedNote = newNote;

        let newState = {};
        Object.assign(newState, state);
        return newState;
    }
}, initialState);