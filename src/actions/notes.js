import { createAction } from 'redux-actions';
import {
    getAllNote as getAllNoteApi,
    addOrUpdateNote as addOrUpdateNoteApi,
    getNotesByPage as getNotesByPageApi
} from '../services/noteApi';

export const getAllNote = createAction('get all note', getAllNoteApi);
export const getNotesByPage = createAction('get notes by page', getNotesByPageApi);
export const addOrUpdateNote = createAction('add or update note', addOrUpdateNoteApi);
export const addEmptyNote = createAction('add empty note');
export const updateNoteTitle = createAction('update note title');
export const updateSelectedNote = createAction('update selected note');