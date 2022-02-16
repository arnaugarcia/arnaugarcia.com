import PortfolioItem from "./portfolio-item";
import Isotope from 'isotope-layout'

import {useCallback, useEffect, useState} from "react";
import PortfolioFilter from "./portfolio-filter";
import {useTranslation} from "next-i18next";
import PortfolioService from "./portfolio.service";

export default function Portfolio() {
    const {t, i18n} = useTranslation('common');
    const [currentFilter, setCurrentFilter] = useState('*');
    const [isotope, setIsotope] = useState(null);
    const [portfolioItems, setPortfolioItems] = useState([]);

    const portfolio = useCallback((node) => {
        if (node !=  null) {
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
        setPortfolioItems(PortfolioService.portfolioItems);
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
                            <h2>MY PROJECTS AND MILESTONES</h2>
                            <h6>PROJECTS THAT I'VE DEVELOPED AND MILESTONES THAT I REACHED</h6>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <ul className={"filters h6"}>
                                    <PortfolioFilter title={"All"}
                                                     current={currentFilter === '*'}
                                                     onFilter={clearFilter}/>
                                    <PortfolioFilter title={"Networks"}
                                                     value={"networks"}
                                                     current={currentFilter === 'networks'}
                                                     onFilter={onSelectedFilter}/>
                                    <PortfolioFilter title={"Angular"}
                                                     value={"angular"}
                                                     current={currentFilter === 'angular'}
                                                     onFilter={onSelectedFilter}/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row row-portfolio" data-columns="4" ref={portfolio}>
                    <div className="grid-sizer"/>
                    {portfolioItems.map((item) => {
                        return (<PortfolioItem
                            title={t(item.title)}
                            keywords={item.filters}
                            subtitle={t(item.subtitle)}
                            image={item.imageUrl}
                            link={item.link}
                        />)
                    })}
                </div>
            </div>
        </>);
}
