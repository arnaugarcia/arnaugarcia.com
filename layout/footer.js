import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <span className="copyright">© {new Date().getFullYear()} Arnau Garcia, All Rights Reserved.</span>
                    </div>
                    <div className="col-md-6">
                        <ul className="social-icons">
                            <li>
                                <a target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={['fab', 'github']}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
