import {Component, OnInit} from '@angular/core';
import {SocialService} from '../../home/profile/social/social.service';
import {ISocialNetwork} from '../../home/profile/social/social.model';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    year: any;
    socialNetworks: ISocialNetwork[] = [];

    constructor(private socialService: SocialService) {
        this.year = new Date().getFullYear();
    }

    ngOnInit() {
        this.socialNetworks = this.socialService.querySocialNetworks();
    }

}
