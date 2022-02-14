const PortfolioService = {
    portfolioItems: () => {
        return [
            {
                filters: ['networks'],
                imageUrl: 'assets/images/portfolio/cisco.webp',
                link: null,
                subtitle: 'PORTFOLIO.ITEMS.ITEM1.SUBTITLE',
                title: 'PORTFOLIO.ITEMS.ITEM1.TITLE',
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
                'imageUrl': 'assets/images/portfolio/logo_realstatecamp.svg',
                'link': null,
                'subtitle': 'PORTFOLIO.ITEMS.ITEM4.SUBTITLE',
                'title': 'PORTFOLIO.ITEMS.ITEM4.TITLE',
                large: false

            },
            {
                'filters': ['spring', 'microservices'],
                'imageUrl': 'assets/images/portfolio/springmicroservices.png',
                'link': null,
                'subtitle': 'PORTFOLIO.ITEMS.ITEM5.SUBTITLE',
                'title': 'PORTFOLIO.ITEMS.ITEM5.TITLE',
                large: false

            },
            {
                'filters': ['startup'],
                'imageUrl': 'assets/images/portfolio/startup-weekend.png',
                'link': null,
                'subtitle': 'PORTFOLIO.ITEMS.ITEM7.SUBTITLE',
                'title': 'PORTFOLIO.ITEMS.ITEM7.TITLE',
                large: false

            }
        ];
    }
};

export default PortfolioService;
