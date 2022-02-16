import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTranslation} from "next-i18next";

export default function Footer() {
    const {i18n} = useTranslation('common');

    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <span className="copyright">{i18n.t('FOOTER.CONTENT', {year: new Date().getFullYear()})}</span>
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
