import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.counter-timer').each(function() {
      $(this).appear(function() {
        var number = $(this).attr('data-to');
        $(this).countTo({
          from: 0,
          to: number,
          speed: 1500,
          refreshInterval: 10,
          formatter: function (number, options) {
            number = number.toFixed(options.decimals);
            number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return number;
          }
        });
      });
    });
  }

}
