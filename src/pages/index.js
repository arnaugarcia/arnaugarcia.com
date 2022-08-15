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
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {WithNavMenu} from "../components/scroll-spy/NavMenu";
import {useTranslation} from "next-i18next";

const Portfolio = dynamic(() => import('../sections/portfolio/portfolio'), {ssr: false})

const Home = () => {
    const {t} = useTranslation('common');
    library.add(fab);

    return (
        <WithNavMenu selector="section">
            <section className={"module-header full-height parallax bg-dark bg-dark-30 header-light"}
                     id="home"
                     data-nav-title={t('NAVBAR.HOME')}
                     data-scrollspy>
                <Header/>
            </section>
            <section className="module" id="profile" data-nav-title={t('NAVBAR.PROFILE')} data-scrollspy>
                <Profile/>
            </section>
            <section className="module module-gray" id="portfolio" data-nav-title={t('NAVBAR.PORTFOLIO')} data-scrollspy>
                <Portfolio/>
            </section>
            <section className="module module-dark" id="services" data-nav-title={t('NAVBAR.SERVICES')} data-scrollspy>
                <Services/>
            </section>
            <section className="module module-gray" id="resume" data-nav-title={t('NAVBAR.RESUME')} data-scrollspy>
                <Summary/>
            </section>
            <section className="module module-dark" id="projects" data-nav-title={t('NAVBAR.PROJECTS')} data-scrollspy>
                <Technologies/>
            </section>
            <section className="module module-gray">
                <Projects/>
            </section>
            <section className="module" id="contact" data-nav-title={t('NAVBAR.CONTACT')} data-scrollspy>
                <Contact/>
            </section>
            <section className="maps-container" id="map">
                <Map/>
            </section>
        </WithNavMenu>
    )
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    }
})

export default Home;
