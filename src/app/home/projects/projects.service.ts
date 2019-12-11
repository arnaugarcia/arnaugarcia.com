import { Injectable } from '@angular/core';
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
        link: null,
        date: 'PROJECTS.ITEMS.0.DATE'
      },
        // Add Sallefy project
      {
        categories: ['PROJECTS.CATEGORIES.BACKEND', 'PROJECTS.CATEGORIES.JAVA'],
        title: 'PROJECTS.ITEMS.1.TITLE',
        description: 'PROJECTS.ITEMS.1.DESCRIPTION',
        image: 'assets/images/projects/iot_car.png',
        imageDescription: 'PROJECTS.ITEMS.1.IMAGE-DESCRIPTION',
        link: null,
        date: 'PROJECTS.ITEMS.1.DATE'
      }
    ];
  }
}
