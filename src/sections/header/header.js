import styles from './header.module.css'
import Particles, {initParticlesEngine} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Typed from "./typed";
import {useTranslation} from "i18next-ssg";
import {useEffect, useState} from "react";
import {particles} from "./particles.constants";

export default function Header() {
    const {t} = useTranslation('common');

    const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <>
            { init && <Particles className={styles.particles} options={particles}/> }
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
        </>
    )
}
