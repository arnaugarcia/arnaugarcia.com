import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TechnologiesService} from './technologies.service';
import {ITechnology} from './technology.model';

declare var tns;

@Component({
    selector: 'app-technologies',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './technologies.component.html',
    styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit, AfterViewInit {

    technologies: ITechnology[] = [];

    constructor(private technologiesService: TechnologiesService) {
    }

    ngOnInit() {
        this.technologies = this.technologiesService.query();
    }

    ngAfterViewInit(): void {
        const slider = tns({
            container: '.my-slider',
            items: 3,
            slideBy: 'page',
            arrowKeys: true,
            mouseDrag: true,
            controls: false,
            nav: false,
            autoplayButtonOutput: false,
            loop: true,
            autoplay: true
        });
    }

}
