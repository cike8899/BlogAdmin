import {createAction} from 'redux-actions'
import promiseMiddleware from 'redux-promise';

export const addTag = createAction("add tag")
export const editTag = createAction("edit tag")
export const getAllTags = createAction("get all tags");