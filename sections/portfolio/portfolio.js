import PortfolioItem from "./portfolio-item";
import Isotope from 'isotope-layout'

import {useEffect, useRef, useState} from "react";
import PortfolioFilter from "./portfolio-filter";

export default function Portfolio() {

    const grid = useRef(null)
    let isotope;
    const [currentFilter, setCurrentFilter] = useState('*');

    useEffect(() => {
        isotope = new Isotope(grid.current, {
            // options
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-sizer'
            }
        });
    }, [isotope]);

    function onSelectedFilter(filter) {
        filterBy('.' + filter);
        setCurrentFilter(filter);
    }

    function filterBy(param) {
        isotope.arrange({filter: param})
    }

    function clearFilter() {
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
                                    <PortfolioFilter title={"All"}  onFilter={clearFilter}/>
                                    <PortfolioFilter title={"Networks"} value={"networks"}  onFilter={(filter) => onSelectedFilter(filter)}/>
                                    <PortfolioFilter title={"Angular"} value={"angular"}  onFilter={(filter) => onSelectedFilter(filter)}/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row row-portfolio" data-columns="4" ref={grid}>
                    <div className="grid-sizer"/>
                    <PortfolioItem
                        title={"Startup Weekend"}
                        keywords={['microservices', 'java']}
                        subtitle={"Together with some coworkers of Opentrends we won a Startup weekend experience. We've developed a platform for  converting unsold perishable products for businesses into sales."}
                        image={"https://arnaugarcia.com/assets/images/portfolio/springmicroservices.png"}
                        link={null}
                    />
                    <PortfolioItem
                        title={"Startup Weekend"}
                        keywords={['networks']}
                        subtitle={"Together with some coworkers of Opentrends we won a Startup weekend experience. We've developed a platform for  converting unsold perishable products for businesses into sales."}
                        image={"https://arnaugarcia.com/assets/images/portfolio/cisco.webp"}
                        link={null}
                    />
                    <PortfolioItem
                        title={"Startup Weekend"}
                        keywords={['angular']}
                        subtitle={"Together with some coworkers of Opentrends we won a Startup weekend experience. We've developed a platform for  converting unsold perishable products for businesses into sales."}
                        image={"https://angular.io/assets/images/logos/angular/angular.svg"}
                        link={null}
                    />
                    <PortfolioItem
                        title={"Startup Weekend"}
                        subtitle={"Together with some coworkers of Opentrends we won a Startup weekend experience. We've developed a platform for  converting unsold perishable products for businesses into sales."}
                        image={"https://arnaugarcia.com/assets/images/portfolio/logo_realstatecamp.svg"}
                        link={null}
                    />
                    <PortfolioItem
                        title={"Startup Weekend"}
                        subtitle={"Together with some coworkers of Opentrends we won a Startup weekend experience. We've developed a platform for  converting unsold perishable products for businesses into sales."}
                        image={"https://arnaugarcia.com/assets/images/portfolio/startup-weekend.png"}
                        link={null}
                    />
                    <PortfolioItem
                        title={"Startup Weekend"}
                        subtitle={"Together with some coworkers of Opentrends we won a Startup weekend experience. We've developed a platform for  converting unsold perishable products for businesses into sales."}
                        image={"https://arnaugarcia.com/assets/images/portfolio/uplace.png"}
                        link={null}
                    />

                </div>
            </div>
        </>);
}
