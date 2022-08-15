import {useState} from "react";
import MailService from "./mail.service";
import {useTranslation} from "next-i18next";
import {EmailAlert, EmailStatus} from "./email-alert";

export default function Contact() {

    const {t} = useTranslation('common');

    const [emailStatus, setEmailStatus] = useState(null);

    const sendMessage = async event => {
        event.preventDefault();

        setEmailStatus(EmailStatus.LOADING)

        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const message = event.target.message.value;

        grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {action: 'submit'}).then((token) => {
            fetch(`/api/captcha?token=${token}`, {method: 'POST'}).then(async (response) => {
                if (!response.ok) {
                    setEmailStatus(EmailStatus.CAPTCHA_ERROR);
                }
                return await MailService.sendEmail({name, email, phone, message});
            }).then((response) => {
                if (response.ok) {
                    setEmailStatus(EmailStatus.SENT);
                } else {
                    setEmailStatus(EmailStatus.ERROR);
                }
            })
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="m-title c-align">
                        <h2>{t('CONTACT.TITLE')}</h2>
                        <h6>{t('CONTACT.SUBTITLE')}</h6>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {emailStatus ?
                        <div className="ajax-response text-center">
                            <EmailAlert status={emailStatus} />
                        </div> :
                        <form id="contact-form" onSubmit={sendMessage}>
                            <div className="row">
                                <div className="form-group col-sm-4">
                                    <input className="form-control"
                                           type="text"
                                           name="name"
                                           aria-label={t('CONTACT.FORM.NAME')}
                                           placeholder={t('CONTACT.FORM.NAME')}
                                           required/>
                                    <p className="help-block text-danger"/>
                                </div>
                                <div className="form-group col-sm-4">
                                    <input className="form-control"
                                           type="email"
                                           name="email"
                                           aria-label={t('CONTACT.FORM.EMAIL')}
                                           placeholder={t('CONTACT.FORM.EMAIL')}
                                           required/>
                                    <p className="help-block text-danger"/>
                                </div>
                                <div className="form-group col-sm-4">
                                    <input className="form-control"
                                           type="text"
                                           name="phone"
                                           aria-label={t('CONTACT.FORM.PHONE')}
                                           placeholder={t('CONTACT.FORM.PHONE')}
                                           required/>
                                    <p className="help-block text-danger"/>
                                </div>
                                <div className="form-group col-sm-12">
                        <textarea className="form-control"
                                  name="message"
                                  aria-label={t('CONTACT.FORM.MESSAGE')}
                                  placeholder={t('CONTACT.FORM.MESSAGE')}
                                  rows="8"
                                  required/>
                                </div>
                                <div className="form-group col-sm-12">
                                    <div className="text-center m-t-20">
                                        <button className="btn btn-round btn-brand" type="submit">
                                            <span>{t('CONTACT.FORM.BUTTON')}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>}
                </div>
            </div>
        </div>)
}
