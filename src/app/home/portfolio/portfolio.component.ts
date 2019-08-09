import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PortfolioService} from './portfolio.service';
import {IPortfolioItem} from './portfolio.model';

declare var $: any;

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {

    public portfolioItems: IPortfolioItem[] = [];

    constructor(private portfolioService: PortfolioService) {
    }

    ngOnInit() {
        this.portfolioService.query().subscribe((response: IPortfolioItem[]) => {
            Object.keys(response).forEach((key) => {
                let item: IPortfolioItem = {
                    title: response[key].title,
                    subtitle: response[key].subtitle,
                    filters: [],
                    imageUrl: response[key].imageUrl,
                    link: response[key].link
                };
                if (response[key].filters) {
                    response[key].filters.forEach((filter) => {
                        item.filters.push(filter);
                    });
                }
                this.portfolioItems.push(item);
            });
            this.initPortfolio();
        });
    }

    private initPortfolio() {
        const filters = $('#filters'),
            worksgrid = $('.row-portfolio');

        $('a', filters).on('click', function () {
            const selector = $(this).attr('data-filter');
            $('.current', filters).removeClass('current');
            $(this).addClass('current');
            setTimeout(function () {
                worksgrid.isotope({
                    filter: selector
                });
            }, 300);
            $('.portfolio-item', worksgrid).css({
                'will-change': '',
                'transform': '',
                'opacity': '',
            });
            return false;
        });

        const tilt = $('.js-tilt').tilt();

        tilt.tilt({
            maxTilt: 2
        });

        $('.js-tilt.large').tilt({
            maxTilt: 1.4
        });

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
