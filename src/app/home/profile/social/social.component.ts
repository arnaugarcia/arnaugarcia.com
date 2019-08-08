import {Component} from '@angular/core';
import {ISocialNetwork} from './social.model';
import {SocialService} from './social.service';

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.css']
})
export class SocialComponent {

    socialNetworks: ISocialNetwork[] = [];

    constructor(private socialService: SocialService) {
        this.socialService.querySocialNetworks().subscribe((socialNetworks: ISocialNetwork[]) => {
            console.log(socialNetworks);
        });
        this.socialNetworks.push(
            {icon: 'fa-instagram', link: 'https://instagram.com/arnaugarcia97'},
            {icon: 'fa-twitter', link: 'https://twitter.com/arnaugarcia97'},
            {icon: 'fa-github', link: 'https://github.com/arnaugarcia'},
            {icon: 'fa-linkedin', link: 'https://instagram.com/arnaugarcia97'});
    }
}
