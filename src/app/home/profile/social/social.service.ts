import {Injectable} from '@angular/core';
import {ISocialNetwork} from './social.model';

@Injectable({
    providedIn: 'root'
})
export class SocialService {

    public querySocialNetworks(): ISocialNetwork[] {
        return [
            {
                'icon': 'fa-github',
                'label': 'SOCIAL.GITHUB.LABEL',
                'link': 'https://github.com/arnaugarcia'
            },
            {
                'icon': 'fa-instagram',
                'label': 'SOCIAL.INSTAGRAM.LABEL',
                'link': 'https://instagram.com/arnaugarcia97'
            },
            {
                'icon': 'fa-linkedin',
                'label': 'SOCIAL.LINKEDIN.LABEL',
                'link': 'https://www.linkedin.com/in/arnaugarciagallego/'
            },
            {
                'icon': 'fa-twitter',
                'label': 'SOCIAL.TWITTER.LABEL',
                'link': 'https://twitter.com/arnaugarcia97'
            }
        ];
    }
}
