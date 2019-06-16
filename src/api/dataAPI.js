import fetch from 'isomorphic-fetch';

const api = 'http://site.yk-news.kz';

export const getMainNews = (page) => {
    
    return fetch(`${api}/main/main-page?page=${page}`)
    .then(response => {
        if (response.status >= 400) {
            throw new Error("Bad request");
        }
        
        return response.json();
    })
    .catch(e => {
        console.log(e);
    })

}