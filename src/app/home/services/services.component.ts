import { Component, OnInit } from '@angular/core';

interface IService {
  title: string;
  text: string;
  logo: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public services: IService[] = [];

  constructor() { }

  ngOnInit() {
    this.services.push({title: 'SERVICE.SERVICES.SERVICE1.TITLE', text: 'SERVICE.SERVICES.SERVICE1.TEXT', logo: 'icon-telescope'});
}

}
