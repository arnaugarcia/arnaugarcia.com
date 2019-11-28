import {Injectable} from '@angular/core';
import {IPortfolioItem} from './portfolio.model';

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {

    public query(): IPortfolioItem[] {
        return [
            {
                'filters': ['networks'],
                'imageUrl': 'assets/images/portfolio/cisco.webp',
                'link': null,
                'subtitle': 'PORTFOLIO.ITEMS.ITEM1.SUBTITLE',
                'title': 'PORTFOLIO.ITEMS.ITEM1.TITLE',
                large: false
            },
            {
                'filters': ['angular', 'projects'],
                'imageUrl': 'assets/images/portfolio/uplace.png',
                'link': null,
                'subtitle': 'PORTFOLIO.ITEMS.ITEM2.SUBTITLE',
                'title': 'PORTFOLIO.ITEMS.ITEM2.TITLE',
                large: false

            },
            {
                'filters': ['angular'],
                'imageUrl': 'https://angular.io/assets/images/logos/angular/angular.svg',
                'link': '#home',
                'subtitle': 'PORTFOLIO.ITEMS.ITEM3.SUBTITLE',
                'title': 'PORTFOLIO.ITEMS.ITEM3.TITLE',
                large: false

            },
            {
                'filters': ['angular', 'projects'],
                'imageUrl': 'assets/images/portfolio/realstatecamp.webp',
                'link': '#contact',
                'subtitle': 'PORTFOLIO.ITEMS.ITEM4.SUBTITLE',
                'title': 'PORTFOLIO.ITEMS.ITEM4.TITLE',
                large: false

            }
        ];
    }
}
