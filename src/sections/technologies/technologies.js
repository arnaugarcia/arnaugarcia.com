import 'tiny-slider/dist/tiny-slider.css'
import Technology from "./technology";
import {useEffect, useState} from "react";
import {sliderConfig} from "./slider.constants";
import {useTranslation} from "next-i18next";
import {TechnologiesService} from "./technologies.service";

export default function Technologies() {

    const {t} = useTranslation('common');
    const [technologies, setTechnologies] = useState([]);

    useEffect(() => {
        import('tiny-slider').then(({tns}) => tns(sliderConfig));
        setTechnologies(TechnologiesService.technologies());
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
                    {technologies.map(({title, image}, index) => <Technology key={index} image={image} description={title}/>)}
                </div>
            </div>
        </div>
    </div>);
}
