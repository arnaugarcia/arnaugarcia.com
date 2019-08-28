import {Injectable} from '@angular/core';
import {ITechnology} from './technology.model';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  query(): ITechnology[] {
        return [
            {
                title: 'Java logo',
                image: '/assets/images/technologies/java.svg'
            },
            {
                title: 'Spring logo',
                image: '/assets/images/technologies/spring.svg'
            },
            {
                title: 'Angular logo',
                image: '/assets/images/technologies/angular.svg'
            },
            {
                title: 'Jhipster logo',
                image: '/assets/images/technologies/jhipster.svg'
            }
        ];
  }
}
