import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  carouselOptions = {
    margin: 25,
    nav: false,
    dots: false,
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      },
      1500: {
        items: 3
      }
    }
  };

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
