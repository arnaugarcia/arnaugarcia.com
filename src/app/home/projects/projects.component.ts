import {Component, OnInit} from '@angular/core';
import {IProject} from './project.model';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    projects: IProject[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
