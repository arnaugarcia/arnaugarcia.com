export default function handler(req, res) {

    if (req.method !== 'POST') {
        res.status(405).json({error: `Method ${req.method} not allowed`})
    }

    fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'post',
        mode: 'cors',
        body: {
            'secret': '6Lcg7yoeAAAAAHt6GQ4DOt0uVSJHbL68QCqDhiiQ'
        }
    }).then((response) => {
        console.log(response);
    })
}
