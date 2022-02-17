import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './social.module.css'
import {useEffect, useState} from "react";
import {SocialService} from "../social/social.service";

export default function Social() {

    const [socialNetworks, setSocialNetworks] = useState([]);

    useEffect(() => {
        setSocialNetworks(SocialService.socialNetworks());
    }, [])

    return (
        <ul className={styles.widgetSocial}>
            {socialNetworks.map(({id, icon, label, link}) => (
                <li key={id}>
                    <a className={'btn btn-sm'}
                       target="_blank"
                       href={link}
                       rel="noreferrer"
                       aria-label={label}>
                        <FontAwesomeIcon icon={['fab', icon]}/>
                    </a>
                </li>
            ))}
        </ul>);
}
