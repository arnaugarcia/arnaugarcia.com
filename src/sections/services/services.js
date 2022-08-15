import Service from "./service";
import {useTranslation} from "next-i18next";
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
