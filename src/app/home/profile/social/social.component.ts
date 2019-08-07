import {Component} from '@angular/core';

interface ISocialNetwork {
    link: string;
    icon: string;
}

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.css']
})
export class SocialComponent {

    socialNetworks: ISocialNetwork[] = [];

    constructor() {
        this.socialNetworks.push(
            {icon: 'fa-instagram', link: 'https://instagram.com/arnaugarcia97'},
            {icon: 'fa-twitter', link: 'https://twitter.com/arnaugarcia97'},
            {icon: 'fa-github', link: 'https://github.com/arnaugarcia'},
            {icon: 'fa-linkedin', link: 'https://instagram.com/arnaugarcia97'});
    }
}
