import {useTranslation} from "i18next-ssg";

export default function PortfolioItem({portfolio}) {
    const {t} = useTranslation('common');
    return (
        <div className={`portfolio-item ${portfolio.filters.join(' ')} ${portfolio.large ? 'large' : ''}`}>
            <div className="portfolio-wrapper">
                <div className="portfolio-img-wrap" style={{backgroundImage: `url(${portfolio.image})`}} title={portfolio.description}/>
                <div className="portfolio-overlay"/>
                <div className="portfolio-caption">
                    <h5 className="portfolio-title">{t(portfolio.title)}</h5>
                    <h6 className="portfolio-subtitle">{t(portfolio.subtitle)}</h6>
                </div>
            </div>
            <a className="portfolio-link" href={portfolio.link}/>
        </div>
    )
}
