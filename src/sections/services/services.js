import Service from "./service";
import {useTranslation} from 'next-i18next/pages';
import {useEffect, useState} from "react";
import {ServicesService} from "./services.service";

export default function Services() {

    const {t} = useTranslation('common');
    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(ServicesService.services());
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="m-title c-align">
                        <h2>{t('SERVICE.TITLE')}</h2>
                        <h6>{t('SERVICE.SUBTITLE')}</h6>
                    </div>
                </div>
            </div>
            <div className="row">
                {services.map((service, index) => <Service
                    key={index}
                    title={t(service.title)}
                    subtitle={t(service.text)}
                    icon={service.icon}
                />)}
            </div>
        </div>
    )
}
