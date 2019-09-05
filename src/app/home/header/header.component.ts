import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ParticlesConstants} from './particles-constants';

declare var particlesJS: any;

@Component({
    selector: 'app-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    ngOnInit() {
        particlesJS('particles-js', ParticlesConstants.particlesConfig);
    }

}
