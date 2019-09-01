import {Component, OnInit} from '@angular/core';
import {IProject} from './project.model';
import {ProjectsService} from './projects.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    projects: IProject[] = [];

    constructor(private projectsService: ProjectsService) {
    }

    ngOnInit() {
        this.projects = this.projectsService.query();
    }

}
