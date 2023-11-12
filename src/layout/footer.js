import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTranslation} from "i18next-ssg";
import {useEffect, useState} from "react";
import {SocialService} from "../sections/social/social.service";

export default function Footer() {
    const {t} = useTranslation('common');

    const [socialNetworks, setSocialNetworks] = useState([]);

    useEffect(() => {
        setSocialNetworks(SocialService.socialNetworks());
    }, []);

    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <span className="copyright">{t('FOOTER.CONTENT', {year: new Date().getFullYear()})}</span>
                    </div>
                    <div className="col-md-6">
                        <ul className="social-icons">
                            {socialNetworks.map(({icon, label, link}, index) => (
                                <li key={index}>
                                    <a href={link} target="_blank" rel="noreferrer" aria-label={label}>
                                        <FontAwesomeIcon icon={['fab', icon]}/>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
