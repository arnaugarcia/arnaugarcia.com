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
        this.socialService
            .querySocialNetworks()
            .subscribe(response => {
                this.socialNetworks.push(...Object.values(response));
            });
    }

}
