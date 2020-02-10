import {Injectable} from '@angular/core';
import {IProject} from './project.model';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    query(): IProject[] {
        return [
            {
                categories: ['PROJECTS.CATEGORIES.IOT', 'PROJECTS.CATEGORIES.CONNECTED-CAR', 'PROJECTS.CATEGORIES.JAVA'],
                title: 'PROJECTS.ITEMS.0.TITLE',
                description: 'PROJECTS.ITEMS.0.DESCRIPTION',
                image: 'assets/images/projects/iot_car.png',
                imageDescription: 'PROJECTS.ITEMS.0.IMAGE-DESCRIPTION',
                link: '#projects',
                date: 'PROJECTS.ITEMS.0.DATE'
            },
            {
                categories: ['PROJECTS.CATEGORIES.BACKEND', 'PROJECTS.CATEGORIES.JAVA'],
                title: 'PROJECTS.ITEMS.1.TITLE',
                description: 'PROJECTS.ITEMS.1.DESCRIPTION',
                image: 'assets/images/projects/sallefy.png',
                imageDescription: 'PROJECTS.ITEMS.1.IMAGE-DESCRIPTION',
                link: '#projects',
                date: 'PROJECTS.ITEMS.1.DATE'
            },
            {
                categories: [
                    'PROJECTS.CATEGORIES.IOT',
                    'PROJECTS.CATEGORIES.JAVA',
                    'PROJECTS.CATEGORIES.DEVOPS'
                ],
                title: 'PROJECTS.ITEMS.2.TITLE',
                description: 'PROJECTS.ITEMS.2.DESCRIPTION',
                image: 'assets/images/projects/iot_home.png',
                imageDescription: 'PROJECTS.ITEMS.2.IMAGE-DESCRIPTION',
                link: '#projects',
                date: 'PROJECTS.ITEMS.2.DATE'
            }
        ];
    }
}
