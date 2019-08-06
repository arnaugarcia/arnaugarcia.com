import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  public faTwitter = faTwitter;
  public faInstagram = faInstagram;
  public faGithub = faGithub;
  public faLinkedIn = faLinkedin;

  constructor() {}

  ngOnInit() {
  }

}
