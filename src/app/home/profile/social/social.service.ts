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
                'link': 'https://github.com/arnaugarcia'
            },
            {
                'icon': 'fa-instagram',
                'link': 'https://instagram.com/arnaugarcia97'
            },
            {
                'icon': 'fa-linkedin',
                'link': 'https://www.linkedin.com/in/arnaugarciagallego/'
            },
            {
                'icon': 'fa-twitter',
                'link': 'https://twitter.com/arnaugarcia97'
            }
        ];
    }
}
