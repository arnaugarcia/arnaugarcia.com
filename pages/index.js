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
import {useEffect, useRef, useState} from "react";

const Portfolio = dynamic(() => import('../sections/portfolio/portfolio'), {ssr: false})

export default function Home() {
    library.add(fab);

    const projects = useRef();
    const profile = useRef();

    const [currentSection, setCurrentSection] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            let entry = entries[0];
            if (entry && entry.isIntersecting) {
                setCurrentSection(entry.target.id)
            }
        });
        [projects.current, profile.current].forEach((section) => observer.observe(section));
    }, [])

    return (
        <div id={"main"}>
            <section className={"module-header full-height parallax bg-dark bg-dark-30 header-light"} id="home">
                <Header currentSection={currentSection}/>
            </section>
            <section className="module" id="profile" ref={profile}>
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
            <section className="module module-dark" id="projects" ref={projects}>
                <Technologies/>
            </section>
            <section className="module module-gray">
                <Projects/>
            </section>
            <section className="module" id="contact">
                <Contact/>
            </section>
            <section className="maps-container" id="map">
                <Map/>
            </section>
        </div>
    )
}
