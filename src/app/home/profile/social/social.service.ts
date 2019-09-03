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
                'label': '',
                'link': 'https://github.com/arnaugarcia'
            },
            {
                'icon': 'fa-instagram',
                'label': '',
                'link': 'https://instagram.com/arnaugarcia97'
            },
            {
                'icon': 'fa-linkedin',
                'label': '',
                'link': 'https://www.linkedin.com/in/arnaugarciagallego/'
            },
            {
                'icon': 'fa-twitter',
                'label': '',
                'link': 'https://twitter.com/arnaugarcia97'
            }
        ];
    }
}
