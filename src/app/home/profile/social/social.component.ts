import {Component, OnInit} from '@angular/core';
import {ISocialNetwork} from './social.model';
import {SocialService} from './social.service';

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

    socialNetworks: ISocialNetwork[] = [];

    constructor(private socialService: SocialService) {
    }

    ngOnInit(): void {
        this.socialNetworks = this.socialService.querySocialNetworks();
    }

}
