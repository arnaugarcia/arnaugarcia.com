import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PortfolioService} from './portfolio.service';
import {IPortfolioItem} from './portfolio.model';

declare var $: any;

@Component({
    selector: 'app-portfolio',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {

    public portfolioItems: IPortfolioItem[] = [];
    public filters: string[] = [];

    constructor(private portfolioService: PortfolioService) {
    }

    ngOnInit() {
        this.portfolioItems = this.portfolioService.query();
        this.portfolioItems.forEach((item) => {
            item.filters.forEach((filter) => {
                if (!this.filters.includes(filter)) {
                    this.filters.push(filter);
                }
            });
        });
        this.initPortfolio();
    }

    private initPortfolio() {
        const worksgrid = $('.row-portfolio');

        $(window).on('resize', function () {
            setTimeout(function () {
                worksgrid.imagesLoaded(function () {
                    worksgrid.isotope({
                        layoutMode: 'masonry',
                        itemSelector: '.portfolio-item',
                        transitionDuration: '0.2s',
                        masonry: {
                            columnWidth: '.grid-sizer',
                        },
                    });
                });
            }, 300);
            $('.portfolio-item', worksgrid).css({
                'will-change': '',
                'transform': '',
                'opacity': '',
            });
        }).resize();
    }


}
