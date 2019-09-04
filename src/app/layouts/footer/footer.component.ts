import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {SocialService} from '../../home/profile/social/social.service';
import {ISocialNetwork} from '../../home/profile/social/social.model';

@Component({
    selector: 'app-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
    year: any;
    socialNetworks: ISocialNetwork[] = [];
    excludedNetworks = ['fa-instagram', 'fa-linkedin'];

    constructor(private socialService: SocialService) {
        this.year = new Date().getFullYear();
    }

    ngOnInit() {
        this.socialNetworks = this.socialService.querySocialNetworks();
    }

}
