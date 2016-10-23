import { post, getAll, get } from './commonApi';

let url = "http://localhost:9000/api/admin/tag";

export function postTag(formData) {
    let promise = post(url + '/addtag', formData);
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
    return getAll(url + "/getalltag");
}

export function getTagsByPage(data) {
    if (!data) {
        data = { countPerPage: 5, currentPage: 1 };
    }
    return post(url + "/gettagsbypage",
        data);
}

export function delTagById(data) {
    let uri = url + "/deltagbyid/" + data.id;
    return post(uri, data);
}