import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
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
    public filters: string[] = [];

    @ViewChild('filtersRef', {static: true})
    public filtersRef: ElementRef;

    constructor(private portfolioService: PortfolioService,
                private renderer: Renderer2) {
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
                        if (!this.filters.includes(filter)) {
                            this.filters.push(filter);
                        }
                    });
                }
                this.portfolioItems.push(item);
            });
            this.initPortfolio();
        });
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
