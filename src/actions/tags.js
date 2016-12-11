import { createAction } from 'redux-actions'

import {
    postTag, getAllTags as getTags, getTagsByPage as getBlogTagsByPage,
    delTagById as delTagByCurrentId, getAllPureTags as getAllPureTagsApi
} from '../services/tagApi';

export const addTag = createAction("add tag", postTag)
export const editTag = createAction("edit tag")
export const getAllTags = createAction("get all tags", getTags);
export const getAllPureTags = createAction("get all pure tags", getAllPureTagsApi);
export const getTagsByPage = createAction("get tags by page", getBlogTagsByPage);
export const delTagById = createAction("del tag by id", delTagByCurrentId);