import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-portfolio-filters',
  templateUrl: './portfolio-filters.component.html',
  styleUrls: ['./portfolio-filters.component.css']
})
export class PortfolioFiltersComponent implements OnInit {

  @Input()
  public filters: string[] = [];

  @ViewChild('filtersRef', {static: true})
  public filtersRef: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  onFilter($event, filter) {
    Object.keys(this.filtersRef.nativeElement.children).forEach((key) => {
      this.renderer.removeClass(this.filtersRef.nativeElement.children[key].childNodes[0], 'current');
    });
    this.renderer.addClass($event.target, 'current');
    const worksgrid = $('.row-portfolio');
    setTimeout(function () {
      worksgrid.isotope({
        filter: filter
      });
    }, 300);
    $('.portfolio-item', worksgrid).css({
      'will-change': '',
      'transform': '',
      'opacity': '',
    });
  }

}
