import url from "url";

export default function handler(request, response) {

    if (request.method !== 'POST') {
        response.status(405).json({error: `Method ${request.method} not allowed`})
        return;
    }

    const urlParametersFromRequest = getUrlParametersFromRequest(request);

    if (!urlParametersFromRequest['token']) {
        response.status(400).json({error: 'Missing token parameter'});
        return;
    }


    /*fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'post',
        mode: 'cors',
        body: {
            'secret': process.env.RECAPTCHA_SITE_KEY
        }
    }).then((response) => {
        //console.log(response);
    })*/
}

function getUrlParametersFromRequest(request) {
    return url.parse(request.url, true).query;
}
