import {useState} from "react";
import MailService from "./mail.service";

export default function Contact() {

    const [response, setResponse] = useState(null);

    const sendMessage = async event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const message = event.target.message.value;

        grecaptcha.ready(() => {
            console.log(grecaptcha);
            grecaptcha.execute('6Lcg7yoeAAAAACWp-OvBb2361m93f3fil53rzArx', {action: 'submit'}).then((token) => {
                fetch(`/api/captcha?token=${token}`).then((response) => {
                    console.log(response);
                })
            });
        });

        /*const res = await MailService.sendEmail({name, email, phone, message});

        if (res.ok) {
            setResponse('Success');
        } else {
            setResponse('Error')
        }*/
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="m-title c-align">
                        <h2>CONTACT ME</h2>
                        <h6>YOU CAN CONTACT ME BY SENDING AN EMAIL HERE OR BY PHONE</h6>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {response ?
                        <div className="ajax-response text-center">{response}</div> :
                        <form id="contact-form" onSubmit={sendMessage}>
                            <div className="row">
                                <div className="form-group col-sm-4">
                                    <input className="form-control"
                                           type="text"
                                           name="name"
                                           required/>
                                    <p className="help-block text-danger"/>
                                </div>
                                <div className="form-group col-sm-4">
                                    <input className="form-control"
                                           type="email"
                                           name="email"
                                           required/>
                                    <p className="help-block text-danger"/>
                                </div>
                                <div className="form-group col-sm-4">
                                    <input className="form-control"
                                           type="text"
                                           name="phone"
                                           required/>
                                    <p className="help-block text-danger"/>
                                </div>
                                <div className="form-group col-sm-12">
                        <textarea className="form-control"
                                  name="message"
                                  rows="8"
                                  required/>
                                </div>
                                {/*<re-captcha *ngIf="!checkedCaptcha" (resolved)="resolved()" [siteKey]="reCaptchaSiteKey"></re-captcha>*/}
                                <div className="form-group col-sm-12">
                                    <div className="text-center m-t-20">
                                        <button className="btn btn-round btn-brand" type="submit">
                                            <span>Send message!</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>}
                </div>
            </div>
        </div>)
}
