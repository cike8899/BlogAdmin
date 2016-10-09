import request from 'superagent';

export function post(url, formData) {
    return new Promise((resolve, reject) => {
        request.post(url)
        // .withCredentials()
            .send(formData)
            .set('Accept', 'application/json')
            .end(function (err, res) {
                console.info("res:", res.body);
                console.info("err:", err);
                err
                    ? reject(err)
                    : resolve(res.body);
            });
    });
}

export function getAll(url) {
    request('GET', url).then((data) => {
        console.info(data.body);
    }, (err) => {
        console.info(err);
    })
}