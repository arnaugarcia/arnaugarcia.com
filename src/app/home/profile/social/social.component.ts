import {Component} from '@angular/core';
import {faTwitter, IconDefinition} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';

interface ISocialNetwork {
    link: string;
    icon: IconDefinition;
}

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.css']
})
export class SocialComponent {

    public faTwitter = faTwitter;
    public faInstagram = faInstagram;
    public faGithub = faGithub;
    public faLinkedIn = faLinkedin;

    socialNetworks: ISocialNetwork[] = [];

    constructor() {
        this.socialNetworks.push(
            {icon: faInstagram, link: 'https://instagram.com/arnaugarcia97'},
            {icon: faTwitter, link: 'https://twitter.com/arnaugarcia97'},
            {icon: faGithub, link: 'https://github.com/arnaugarcia'},
            {icon: faLinkedin, link: 'https://instagram.com/arnaugarcia97'});
    }
}
