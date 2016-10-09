import {post, getAll} from './commonApi';

let url = "http://localhost:9000/api/students/";

export function postTag(formData) {
    let promise = post(url, formData);
    console.info("promise:", promise);
    return promise.then((data) => {
        console.info(data);
        return data;
    }, (err) => {
        console.info(err);
        return err;
    });
}

export function getAllTags() {
    getAll(url);
}