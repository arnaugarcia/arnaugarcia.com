import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.progress-bar').each(function() {
      $(this).appear(function() {
        var percent = $(this).attr('aria-valuenow');
        $(this).animate({'width' : percent + '%'});
        $(this).find('.pb-number-box').animate({'opacity' : 1}, 1000);
        $(this).find('.pb-number').countTo({
          from: 0,
          to: percent,
          speed: 900,
          refreshInterval: 30
        });
      });
    });
  }

}
