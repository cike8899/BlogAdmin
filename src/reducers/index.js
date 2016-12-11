import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import todos from './todos'
import tags from './tags';
import users from './users';
import currentArticle from './currentArticle';
import notes from './notes';
import allTags from './allTags';

export default combineReducers({ routing, todos, tags, users, currentArticle ,notes,allTags})//全局变量的名称在这里，state.users
