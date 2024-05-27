import {useTranslation} from "i18next-ssg";

export const EmailStatus = Object.freeze({
    SENT: 'SENT',
    ERROR: 'ERROR',
    CAPTCHA_ERROR: 'CAPTCHA_ERROR',
    LOADING: 'LOADING'
});

export const EmailAlert = ({status}) => {

    const {t} = useTranslation('common');

    return (<>
        {
            {
                SENT: <div className={"alert alert-success"} role="alert">{t('CONTACT.FORM.RESPONSE.SUCCESS')}</div>,
                ERROR: <div className={"alert alert-danger"} role="alert">{t('CONTACT.FORM.RESPONSE.ERROR')}</div>,
                CAPTCHA_ERROR: <div className={"alert alert-danger"} role="alert">{t('CONTACT.FORM.RESPONSE.CAPTCHA-ERROR')}</div>,
                LOADING: <div className={"alert alert-info"} role="alert">{t('CONTACT.FORM.RESPONSE.LOADING')}</div>
            }[status]
        }
    </>)
}
