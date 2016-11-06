import { createAction } from 'redux-actions'
import { login as loginApi, logout as logoutApi } from '../services/userApi';

export const login = createAction('login', loginApi);
export const logout = createAction('logout', logoutApi);