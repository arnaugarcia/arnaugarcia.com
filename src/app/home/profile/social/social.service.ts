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
                'link': 'https://github.com/arnaugarcia'
            },
            {
                'icon': 'instagram',
                'link': 'https://twitter.com/arnaugarcia97'
            },
            {
                'icon': 'linkedin',
                'link': 'https://www.linkedin.com/in/arnaugarciagallego/'
            },
            {
                'icon': 'twitter',
                'link': 'https://twitter.com/arnaugarcia97'
            }
        ];
    }
}
