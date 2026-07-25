import 'tiny-slider/dist/tiny-slider.css'
import Technology from "./technology";
import {useEffect, useState} from "react";
import {sliderConfig} from "./slider.constants";
import {useTranslation} from "i18next-ssg";
import {TechnologiesService} from "./technologies.service";

export default function Technologies() {
    const {t} = useTranslation('common');
    const [technologies, setTechnologies] = useState([]);

    useEffect(() => {
        setTechnologies(TechnologiesService.technologies());
    }, []);

    useEffect(() => {
        if (!technologies.length) return undefined;

        let slider;
        let cancelled = false;

        import('tiny-slider').then(({tns}) => {
            if (cancelled) return;
            const container = document.querySelector(sliderConfig.container);
            if (!container || !container.children.length) return;
            slider = tns(sliderConfig);
        });

        return () => {
            cancelled = true;
            if (slider?.destroy) {
                slider.destroy(true);
            }
        };
    }, [technologies]);

    return (<div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="m-title c-align">
                    <h2>{t('TECHNOLOGIES.TITLE')}</h2>
                </div>
            </div>
            <div className="col-md-12">
                <div className="my-slider">
                    {technologies.map(({title, image}, index) => (
                        <Technology key={index} image={image} description={title}/>
                    ))}
                </div>
            </div>
        </div>
    </div>);
}
