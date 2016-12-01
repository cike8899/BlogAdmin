import { post, getAll, get } from './commonApi';
import cookies from 'js-cookie';
import { hashHistory } from 'react-router';

let url = "http://localhost:9000/api/admin/user";

export let login = (userInfo) => {
    let uri = url + "/login";
    let promise = post(uri, userInfo).then((ret) => {
        if (ret.success === true) {
            let token = ret.token;
            cookies.set('token', token, { expires: 1 });
            hashHistory.push("/article");
        } else if (ret.success === "not found") {
            console.info("not found");
        }
        console.info(ret);
        return ret;
    });
    return promise;
}

export let logout = (userInfo) => {
    let uri = url + "/logout";
    return post(uri, userInfo).then((ret) => {
        if (ret.success) {
            hashHistory.push("/");
        }
        return ret;
    });
}

