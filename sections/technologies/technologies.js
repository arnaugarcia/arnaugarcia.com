import Technology from "./technology";
import {useEffect} from "react";

export default function Technologies() {

    useEffect(() => {
        import('tiny-slider').then(({tns}) => {
            tns({
                container: '.my-slider',
                items: 3,
                slideBy: 'page',
                arrowKeys: true,
                mouseDrag: true,
                controls: false,
                nav: false,
                autoplayButtonOutput: false,
                loop: true,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 2
                    },
                    1500: {
                        items: 3
                    }
                }
            })
        })
    }, []);

    return (<div className="container">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css"/>
        <div className="row">
            <div className="col-md-12">
                <div className="m-title c-align">
                    <h2>TECHNOLOGIES, FRAMEWORKS AND PROJECTS</h2>
                </div>
            </div>
            <div className="col-md-12">
                <div className="my-slider">
                    <Technology image={'https://arnaugarcia.com/assets/images/technologies/java.png'} description={'Java'}/>
                    <Technology image={'https://arnaugarcia.com/assets/images/technologies/mongodb.png'} description={'Java'}/>
                    <Technology image={'https://arnaugarcia.com/assets/images/technologies/mysql.png'} description={'Java'}/>
                    <Technology image={'https://arnaugarcia.com/assets/images/technologies/docker.png'} description={'Java'}/>
                    <Technology image={'https://arnaugarcia.com/assets/images/technologies/hibernate.png'} description={'Java'}/>
                    <Technology image={'https://arnaugarcia.com/assets/images/technologies/jenkins.png'} description={'Java'}/>
                </div>
            </div>
        </div>
    </div>);
}
