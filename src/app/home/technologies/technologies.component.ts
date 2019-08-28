import { Component, OnInit } from '@angular/core';
import {CarouselConstants} from './carousel.constants';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  carouselOptions = CarouselConstants.carouselConfig;

  images = [
    {
      image: '/assets/images/technologies/java.svg'
    },
    {
      image: '/assets/images/technologies/spring.svg'
    },
    {
      image: '/assets/images/technologies/angular.svg'
    },
    {
      image: '/assets/images/technologies/jhipster.svg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
