import {createAction} from 'redux-actions'

import {postTag, getAllTags as getTags} from '../services/tagApi';

export const addTag = createAction("add tag", postTag)
export const editTag = createAction("edit tag")
export const getAllTags = createAction("get all tags", getTags);