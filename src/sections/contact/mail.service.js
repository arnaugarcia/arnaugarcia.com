const MailService = {

    serviceUrl: `https://services.arnaugarcia.com`,
    email: `arnau.garcia.gallego@gmail.com`,

    sendEmail({name, email, phone, message}) {

        const formData = new URLSearchParams();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('message', message);

        return fetch(
            `${this.serviceUrl}?email=${this.email}&company=arnaugarcia.com`,
            {
                mode: 'cors',
                body: formData.toString(),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: 'POST'
            }
        )
    }
}

export default MailService;
