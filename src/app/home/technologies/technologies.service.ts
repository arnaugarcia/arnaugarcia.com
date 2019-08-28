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
                image: '/assets/images/technologies/java.png'
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
                image: '/assets/images/technologies/jhipster.png'
            },
            {
                title: 'AWS logo',
                image: '/assets/images/technologies/aws.png'
            },
            {
                title: 'Hibernate logo',
                image: '/assets/images/technologies/hibernate.png'
            },
            {
                title: 'Jenkins logo',
                image: '/assets/images/technologies/jenkins.png'
            },
            {
                title: 'MySQL logo',
                image: '/assets/images/technologies/mysql.png'
            },
            {
                title: 'MongoDB logo',
                image: '/assets/images/technologies/mongodb.svg'
            },
            {
                title: 'NodeJS logo',
                image: '/assets/images/technologies/nodejs.png'
            },
            {
                title: 'Docker logo',
                image: '/assets/images/technologies/docker.png'
            },
            {
                title: 'Kubernetes logo',
                image: '/assets/images/technologies/kubernetes.png'
            },
            {
                title: 'Netflix OSS logo',
                image: '/assets/images/technologies/netflixoss.png'
            },
            {
                title: 'Google Cloud logo',
                image: '/assets/images/technologies/googlecloud.png'
            }
        ];
  }
}
