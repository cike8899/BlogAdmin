import { post, getAll, get } from './commonApi';

let url = "http://localhost:9000/api/admin/note";

export function getAllNoteTitle() {
    // let uri = url + "/getallnote";
    // return getAll(uri);
}

export function getAllNote() {
    let uri = url + "/getallnote";
    return getAll(uri);
}

export function getNotesByPage(currentPage) {
    let data = {
        currentPage: currentPage,
        countPerPage: 20
    };
    let uri = url + "/getnotesbypage";
    return post(uri, data);
}

export function addOrUpdateNote(data) {
    let uri = url + "/upsertnote";
    return post(uri, data);
}