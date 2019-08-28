import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  items: number[] = [0, 1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

}
