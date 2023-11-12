import PortfolioItem from "./portfolio-item";
import Isotope from 'isotope-layout'

import {useCallback, useEffect, useState} from "react";
import PortfolioFilter from "./portfolio-filter";
import {useTranslation} from "i18next-ssg";
import PortfolioService from "./portfolio.service";
import {PortfolioModel} from "./portfolio.model";

export default function Portfolio() {
    const {t, i18n} = useTranslation('common');
    const [currentFilter, setCurrentFilter] = useState('*');
    const [isotope, setIsotope] = useState(null);
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [portfolioFilters, setPortfolioFilters] = useState([]);

    const portfolio = useCallback((node) => {
        if (node != null) {
            const isotope = new Isotope(node, {
                // options
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows',
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.grid-sizer'
                }
            });
            setIsotope(isotope);
            return () => isotope.destroy();
        }
    }, [i18n.language, portfolioItems])

    useEffect(() => {
        const portfolioItems = PortfolioService.portfolioItems().map((item) => new PortfolioModel(item));
        setPortfolioItems(portfolioItems);
        setPortfolioFilters([...new Set(portfolioItems.map((item) => item.filters).flat())]);
    }, [i18n.language]);

    const onSelectedFilter = (filter) => {
        setCurrentFilter(filter);
        filterBy('.' + filter);
    }

    const filterBy = (param) => {
        isotope.arrange({filter: param})
    }

    const clearFilter = () => {
        setCurrentFilter('*');
        filterBy('*')
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="m-title c-align">
                            <h2>{t('PORTFOLIO.TITLE')}</h2>
                            <h6>{t('PORTFOLIO.SUBTITLE')}</h6>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ul className={"filters h6"}>
                                    <PortfolioFilter title={"All"}
                                                     current={currentFilter === '*'}
                                                     onFilter={clearFilter}/>
                                    {portfolioFilters.map((filter, index) =>
                                        <PortfolioFilter
                                            key={index}
                                            title={filter.toLocaleString()}
                                            value={filter}
                                            current={currentFilter === filter}
                                            onFilter={onSelectedFilter}
                                        />)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row row-portfolio" data-columns="4" ref={portfolio}>
                    <div className="grid-sizer"/>
                    {portfolioItems.map((item, index) => <PortfolioItem key={index} portfolio={item}/>)}
                </div>
            </div>
        </>);
}
