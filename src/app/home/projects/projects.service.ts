import { Injectable } from '@angular/core';
import {IProject} from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  query(): IProject[] {
    return [
      {
        categories: ['PROJECTS.CATEGORIES.IOT', 'PROJECTS.CATEGORIES.CONNECTED-CAR'],
        title: 'PROJECTS.ITEMS.0.TITLE',
        description: 'PROJECTS.ITEMS.0.DESCRIPTION',
        image: 'assets/images/projects/iot_car.png',
        imageDescription: 'PROJECTS.ITEMS.0.IMAGE-DESCRIPTION',
        link: 'http://blog.arnaugarcia.com/connected-car',
        date: 'PROJECTS.ITEMS.0.DATE'
      },
        // Add Sallefy project
      {
        categories: ['PROJECTS.CATEGORIES.IOT', 'PROJECTS.CATEGORIES.CONNECTED-CAR'],
        title: 'PROJECTS.ITEMS.0.TITLE',
        description: 'PROJECTS.ITEMS.0.DESCRIPTION',
        image: 'assets/images/projects/iot_car.png',
        imageDescription: 'PROJECTS.ITEMS.0.IMAGE-DESCRIPTION',
        link: 'http://blog.arnaugarcia.com/connected-car',
        date: 'PROJECTS.ITEMS.0.DATE'
      },
      {
        categories: ['PROJECTS.CATEGORIES.IOT', 'PROJECTS.CATEGORIES.CONNECTED-CAR'],
        title: 'PROJECTS.ITEMS.0.TITLE',
        description: 'PROJECTS.ITEMS.0.DESCRIPTION',
        image: 'assets/images/projects/iot_car.png',
        imageDescription: 'PROJECTS.ITEMS.0.IMAGE-DESCRIPTION',
        link: 'http://blog.arnaugarcia.com/connected-car',
        date: 'PROJECTS.ITEMS.0.DATE'
      },
      {
        categories: ['PROJECTS.CATEGORIES.IOT', 'PROJECTS.CATEGORIES.CONNECTED-CAR'],
        title: 'PROJECTS.ITEMS.0.TITLE',
        description: 'PROJECTS.ITEMS.0.DESCRIPTION',
        image: 'assets/images/projects/iot_car.png',
        imageDescription: 'PROJECTS.ITEMS.0.IMAGE-DESCRIPTION',
        link: 'http://blog.arnaugarcia.com/connected-car',
        date: 'PROJECTS.ITEMS.0.DATE'
      },
      {
        categories: ['PROJECTS.CATEGORIES.IOT', 'PROJECTS.CATEGORIES.CONNECTED-CAR'],
        title: 'PROJECTS.ITEMS.0.TITLE',
        description: 'PROJECTS.ITEMS.0.DESCRIPTION',
        image: 'assets/images/projects/iot_car.png',
        imageDescription: 'PROJECTS.ITEMS.0.IMAGE-DESCRIPTION',
        link: 'http://blog.arnaugarcia.com/connected-car',
        date: 'PROJECTS.ITEMS.0.DATE'
      }
    ];
  }
}
