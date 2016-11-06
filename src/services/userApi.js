import { post, getAll, get } from './commonApi';
import cookies from 'js-cookie';

let url = "http://localhost:9000/api/admin/user";

export let login = (userInfo) => {
    let uri = url + "/login";
    return post(uri, userInfo);
}

export let logout = (userInfo) => {
    let uri = url + "/logout";
    return post(uri, userInfo);
}

