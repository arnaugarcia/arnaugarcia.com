import Image from 'next/image'
import Social from "./social";
import Skill from "./skill";
import {useTranslation} from "i18next-ssg";

export default function Profile() {
    const {t} = useTranslation('common');
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="m-title c-align">
                    <h2>{t('PROFILE.TITLE')}</h2>
                    <h6>{t('PROFILE.SUBTITLE')}</h6>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <p>
                    <Image src={"/assets/images/arnaugarcia.png"} height={380} width={350}/>
                </p>
            </div>
            <div className="col-md-4">
                <h5>{t('PROFILE.BIOGRAPHY.TITLE')}</h5>
                <p>{t('PROFILE.BIOGRAPHY.PARAGRAPH1')}</p>
                <p>{t('PROFILE.BIOGRAPHY.PARAGRAPH2')}</p>
                <h3 className="h4">{t('PROFILE.SOCIAL')}</h3>
                <Social/>
            </div>
            <div className="col-md-4 skills">
                <h5>{t('PROFILE.SKILLS.TITLE')}</h5>
                <Skill label={t('PROFILE.SKILLS.SKILL1')} value={95}/>
                <Skill label={t('PROFILE.SKILLS.SKILL2')} value={95}/>
                <Skill label={t('PROFILE.SKILLS.SKILL3')} value={85}/>
                <Skill label={t('PROFILE.SKILLS.SKILL4')} value={90}/>
                <Skill label={t('PROFILE.SKILLS.SKILL5')} value={90}/>
            </div>
        </div>
    </div>);
}
