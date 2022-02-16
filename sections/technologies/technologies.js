import 'tiny-slider/dist/tiny-slider.css'
import Technology from "./technology";
import {useEffect} from "react";
import {sliderConfig} from "./slider.constants";
import {useTranslation} from "next-i18next";

export default function Technologies() {

    const {t} = useTranslation('common');

    useEffect(() => {
        import('tiny-slider').then(({tns}) => tns(sliderConfig));
    }, []);

    return (<div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="m-title c-align">
                    <h2>{t('TECHNOLOGIES.TITLE')}</h2>
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
