import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CarouselConstants} from './carousel.constants';
import {TechnologiesService} from './technologies.service';
import {ITechnology} from './technology.model';

@Component({
    selector: 'app-technologies',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './technologies.component.html',
    styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

    carouselOptions = CarouselConstants.carouselConfig;

    technologies: ITechnology[] = [];

    constructor(private technologiesService: TechnologiesService) {
    }

    ngOnInit() {
        this.technologies = this.technologiesService.query();
    }

}
