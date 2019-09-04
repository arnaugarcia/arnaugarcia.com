import {Injectable} from '@angular/core';
import {ISocialNetwork} from './social.model';

@Injectable({
    providedIn: 'root'
})
export class SocialService {

    public querySocialNetworks(): ISocialNetwork[] {
        return [
            {
                'icon': 'github',
                'label': 'SOCIAL.GITHUB.LABEL',
                'link': 'https://github.com/arnaugarcia'
            },
            {
                'icon': 'instagram',
                'label': 'SOCIAL.INSTAGRAM.LABEL',
                'link': 'https://instagram.com/arnaugarcia97'
            },
            {
                'icon': 'linkedin',
                'label': 'SOCIAL.LINKEDIN.LABEL',
                'link': 'https://www.linkedin.com/in/arnaugarciagallego/'
            },
            {
                'icon': 'twitter',
                'label': 'SOCIAL.TWITTER.LABEL',
                'link': 'https://twitter.com/arnaugarcia97'
            }
        ];
    }
}
