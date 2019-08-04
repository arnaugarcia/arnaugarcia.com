import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-portfolio',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {

    ngOnInit() {
        const filters = $('#filters'),
            worksgrid = $('.row-portfolio');

        $('a', filters).on('click', () => {
            const selector = $(this).attr('data-filter');
            $('.current', filters).removeClass('current');
            $(this).addClass('current');
            worksgrid.isotope({
                filter: selector
            });
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

        $(window).on('resize', () => {
            worksgrid.imagesLoaded(() => {
                worksgrid.isotope({
                    layoutMode: 'masonry',
                    itemSelector: '.portfolio-item',
                    transitionDuration: '0.2s',
                    masonry: {
                        columnWidth: '.grid-sizer',
                    },
                });
            });
            $('.portfolio-item', worksgrid).css({
                'will-change': '',
                'transform': '',
                'opacity': '',
            });
        }).trigger('resize');
    }

}
