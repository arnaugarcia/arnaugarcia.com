export default function PortfolioItem({title, subtitle, keywords = [], image, link}) {
    return (
        <div className={`portfolio-item ${keywords.join(' ')}`}>
            <div className="portfolio-wrapper">
                <div className="portfolio-img-wrap" style={{backgroundImage: `url(${image})`}}/>
                <div className="portfolio-overlay"/>
                <div className="portfolio-caption">
                    <h5 className="portfolio-title">{title}</h5>
                    <h6 className="portfolio-subtitle">{subtitle}</h6>
                </div>
            </div>
            <a className="portfolio-link" href={link}/>
        </div>
    )
}
