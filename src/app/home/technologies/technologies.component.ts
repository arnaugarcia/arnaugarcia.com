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
    rewind: true,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 2,
        nav: true,
        loop: false
      },
      1500: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  };

  images = [
    {
      image: '/assets/images/technologies/java.svg'
    },
    {
      image: '/assets/images/technologies/java.svg'
    },
    {
      image: '/assets/images/technologies/java.svg'
    },
    {
      image: '/assets/images/technologies/java.svg'
    },
    {
      image: '/assets/images/technologies/java.svg'
    },
    {
      image: '/assets/images/technologies/java.svg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
