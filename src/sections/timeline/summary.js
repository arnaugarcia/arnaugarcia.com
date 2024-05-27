import Milestone from "./milestone";
import {useEffect, useState} from "react";
import {MilestoneService} from "./milestone.service";
import {useTranslation} from "next-i18next";

export default function Summary() {

    const {t} = useTranslation('common');

    const [milestones, setMilestones] = useState([]);

    useEffect(() => {
        setMilestones(MilestoneService.milestones());
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="m-title c-align">
                        <h2>{t('RESUME.TITLE')}</h2>
                        <h6>{t('RESUME.SUBTITLE')}</h6>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ul className="timeline">
                        {milestones.map((milestone, index) =>
                            <Milestone
                                key={index}
                                title={t(milestone.title)}
                                place={t(milestone.subtitle)}
                                date={t(milestone.year)}
                                image={milestone.image}
                                description={t(milestone.description)}/>
                        )}
                    </ul>
                    <div className="text-center">
                        <a className="btn btn-lg btn-gray" href={"/assets/resume/CV_ArnauGarcia_rev8.pdf"} target={'_blank'}>
                            <span>{t('RESUME.CV-BUTTON')}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
