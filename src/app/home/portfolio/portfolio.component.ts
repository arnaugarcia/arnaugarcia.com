import {Component, OnInit} from '@angular/core';
import {PortfolioService} from './portfolio.service';
import {IPortfolioItem} from './portfolio.model';
import {map} from 'rxjs/operators';

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
        this.portfolioService.query()
            .pipe(map((response) => this.mapResponse(response)))
            .subscribe((items: IPortfolioItem[]) => {
                this.portfolioItems = items;
                this.initPortfolio();
            });
    }

    private mapResponse(response) {
        const items: IPortfolioItem[] = [];
        Object.keys(response).forEach((key) => {
            const item: IPortfolioItem = {
                title: response[key].title,
                subtitle: response[key].subtitle,
                filters: response[key].filters,
                imageUrl: response[key].imageUrl,
                link: response[key].link,
                large: response[key].large
            };
            items.push(item);
        });
        return items;
    }

    private initPortfolio() {
        const worksgrid = $('.row-portfolio');

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
