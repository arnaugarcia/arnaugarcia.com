import styles from './header.module.css'
import Particles, {ParticlesProvider} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Typed from "./typed";
import {useTranslation} from "next-i18next/pages";
import {particles} from "./particles.constants";

async function initParticles(engine) {
    await loadSlim(engine);
}

export default function Header() {
    const {t} = useTranslation('common');

    return (
        <ParticlesProvider init={initParticles}>
            <Particles className={styles.particles} options={particles}/>
            <div className={styles.text}>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="h1 m-b-15">{t('INTRO.TITLE')}</h1>
                        <h5>
                            <Typed/>
                        </h5>
                    </div>
                </div>
            </div>
            <div className="mouse-icon">
                <div className="wheel"/>
            </div>
        </ParticlesProvider>
    )
}
