import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from './social.module.css'

export default function Social() {

    const social = [
        {
            'id': '1',
            'icon': 'github',
            'label': 'SOCIAL.GITHUB.LABEL',
            'link': 'https://github.com/arnaugarcia'
        },
        {
            'id': '2',
            'icon': 'instagram',
            'label': 'SOCIAL.INSTAGRAM.LABEL',
            'link': 'https://instagram.com/arnaugarcia97'
        },
        {
            'id': '3',
            'icon': 'linkedin',
            'label': 'SOCIAL.LINKEDIN.LABEL',
            'link': 'https://www.linkedin.com/in/arnaugarciagallego/'
        },
        {
            'id': '4',
            'icon': 'twitter',
            'label': 'SOCIAL.TWITTER.LABEL',
            'link': 'https://twitter.com/arnaugarcia97'
        }
    ];

    return (
        <ul className={styles.widgetSocial}>
            {social.map(({id, icon, label, link}) => (
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
