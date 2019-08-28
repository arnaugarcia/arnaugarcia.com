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
                imageName: 'java'
            },
            {
                title: 'Spring logo',
                imageName: 'spring'
            },
            {
                title: 'Angular logo',
                imageName: 'angular'
            },
            {
                title: 'Jhipster logo',
                imageName: 'jhipster'
            },
            {
                title: 'AWS logo',
                imageName: 'aws'
            },
            {
                title: 'Hibernate logo',
                imageName: 'hibernate'
            },
            {
                title: 'Jenkins logo',
                imageName: 'jenkins'
            },
            {
                title: 'MySQL logo',
                imageName: 'mysql'
            },
            {
                title: 'MongoDB logo',
                imageName: 'mongodb'
            },
            {
                title: 'NodeJS logo',
                imageName: 'nodejs'
            },
            {
                title: 'Docker logo',
                imageName: 'docker'
            },
            {
                title: 'Kubernetes logo',
                imageName: 'kubernetes'
            },
            {
                title: 'Netflix OSS logo',
                imageName: 'netflixoss'
            },
            {
                title: 'Google Cloud logo',
                imageName: 'googlecloud'
            }
        ];
  }
}
