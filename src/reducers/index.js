import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import todos from './todos'
import tags from './tags';
import users from './users';

export default combineReducers({ routing, todos, tags, users })
