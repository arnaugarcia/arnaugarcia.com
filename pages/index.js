import Profile from "../sections/profile/profile";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import Header from "../sections/header/header";
import dynamic from "next/dynamic";
import Services from "../sections/services/services";
import Summary from "../sections/timeline/summary";
import Technologies from "../sections/technologies/technologies";
import Projects from "../sections/projects/projects";
import Contact from "../sections/contact/contact";
import Map from "../sections/map/map";
import {useEffect, useRef} from "react";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {WithNavMenu} from "../components/scroll-spy/NavMenu";

const Portfolio = dynamic(() => import('../sections/portfolio/portfolio'), {ssr: false})

const Home = (props) => {
    library.add(fab);

    const sections = useRef();

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            let entry = entries[0];
            if (entry && entry.isIntersecting) {
                props.onSectionChanges(entry.target.id);
            }
        }, {threshold: [0.50]});
        Array.from(sections.current.children).filter((section) => section.id).forEach((section) => observer.observe(section));
    }, [])

    return (
        <div id={"main"} ref={sections}>
            <WithNavMenu selector="section">
                <section className={"module-header full-height parallax bg-dark bg-dark-30 header-light"} id="home"
                         data-nav-title="Section 1" data-scrollspy>
                    <Header/>
                </section>
                <section className="module" id="profile" data-nav-title="Section 2" data-scrollspy>
                    <Profile/>
                </section>
                <section className="module module-gray" id="portfolio" data-nav-title="Section 3" data-scrollspy>
                    <Portfolio/>
                </section>
                <section className="module module-dark" id="services" data-nav-title="Section 4" data-scrollspy>
                    <Services/>
                </section>
                <section className="module module-gray" id="resume" data-nav-title="Section 5" data-scrollspy>
                    <Summary/>
                </section>
                <section className="module module-dark" id="projects" data-nav-title="Section 6" data-scrollspy>
                    <Technologies/>
                </section>
                <section className="module module-gray" data-nav-title="Section 7" data-scrollspy>
                    <Projects/>
                </section>
                <section className="module" id="contact" data-nav-title="Section 8" data-scrollspy>
                    <Contact/>
                </section>
                <section className="maps-container" id="map">
                    <Map/>
                </section>
            </WithNavMenu>
        </div>
    )
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    }
})

export default Home;
