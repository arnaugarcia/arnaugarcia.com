export default function Contact() {
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
                    <form id="contact-form">
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

                            <div className="form-group col-sm-12">
                                <div className="text-center m-t-20">
                                    <button className="btn btn-round btn-brand" type="submit" disabled>
                                        <span>Send message!</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="ajax-response text-center">Response!!!</div>
                </div>
            </div>
        </div>)
}
