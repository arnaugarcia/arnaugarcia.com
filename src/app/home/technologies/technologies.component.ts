import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TechnologiesService} from './technologies.service';
import {ITechnology} from './technology.model';
import {SliderConstants} from './slider.constants';

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
        tns(SliderConstants.sliderConfig);
    }

}
