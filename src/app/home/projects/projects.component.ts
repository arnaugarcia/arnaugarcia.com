import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IProject} from './project.model';
import {ProjectsService} from './projects.service';

@Component({
    selector: 'app-projects',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    projects: IProject[] = [];
    show = 3;

    constructor(private projectsService: ProjectsService) {
    }

    ngOnInit() {
        this.projects = this.projectsService.query();
    }

    showAllProjects() {
        this.show = this.projects.length;
    }
}
