export class PortfolioModel {
    constructor(item) {
        this.title = item.title;
        this.subtitle = item.subtitle;
        this.filters = item.filters;
        this.image = item.imageUrl;
        this.link = item.link;
        this.large = item.large;
    }
}
