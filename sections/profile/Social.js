import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Social.module.css'

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

    return (<>
        <h3 className="h4">WHERE CAN YOU FIND ME?</h3>
        <ul className={"widget-social"}>
            {social.map(({id, icon, label, link}) => (
                <li key={id}>
                    <a className={"btn btn-sm social-button"}
                       target="_blank"
                       href={link}
                       rel="noreferrer"
                       aria-label={label}>
                        <FontAwesomeIcon icon={['fab', icon]}/>
                    </a>
                </li>
            ))}
        </ul>
    </>);
}
