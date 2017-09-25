import $ from 'jquery';

function get(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            method: 'GET'
        })
            .done(resolve)
            .fail(reject);
    });
}

export { get };