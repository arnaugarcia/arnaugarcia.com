import Profile from "../sections/profile/profile";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Header from "../sections/header/header";
import dynamic from "next/dynamic";
import Services from "../sections/services/services";
import Summary from "../sections/timeline/summary";
import Technologies from "../sections/technologies/technologies";
import Projects from "../sections/projects/projects";

const Portfolio = dynamic(() => import('../sections/portfolio/portfolio'), {ssr: false})

export default function Home() {
    library.add(fab);

    return (
        <div id={"main"}>
            <section className={"module-header full-height parallax bg-dark bg-dark-30 header-light"} id="home">
                <Header/>
            </section>
            <section className="module" id="profile">
                <Profile/>
            </section>
            <section className="module module-gray" id="portfolio">
                <Portfolio/>
            </section>
            <section className="module module-dark" id="services">
                <Services/>
            </section>
            <section className="module module-gray" id="resume">
                <Summary/>
            </section>
            <section className="module module-dark" id="projects">
                <Technologies/>
            </section>
            <section className="module module-gray">
                <Projects/>
            </section>
        </div>
    )
}
