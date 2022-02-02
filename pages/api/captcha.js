import url from "url";

const captchaServiceUrl = `https://www.google.com/recaptcha/api/siteverify`;

export default async function handler(req, res) {

    if (req.method !== 'POST') {
        res.status(405).json({error: `Method ${req.method} not allowed`})
        return;
    }

    const urlParametersFromRequest = getUrlParametersFromRequest(req);

    let token = urlParametersFromRequest['token'];

    if (!token) {
        res.status(400).json({status: 'error', message: 'Missing token parameter'});
        return;
    }

    await fetch(`${captchaServiceUrl}?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`, {
        method: 'post'
    }).then(async () => {
        res.status(200).json({status: 'success', message: 'Is correct'});
    }).catch(() => {
        res.status(500).json({status: 'error', message: 'Some error has been found during the req'})
    });
}

function getUrlParametersFromRequest(request) {
    return url.parse(request.url, true).query;
}
