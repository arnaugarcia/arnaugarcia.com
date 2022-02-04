import styles from './header.module.css'
import Particles from "react-tsparticles";
import Typed from "./typed";
import {particlesConstants} from "./particles.constants";

export default function Header() {
    return (
        <>
            <Particles className={styles.particles} options={particlesConstants} />
            <div className={styles.text}>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="h1 m-b-15">Arnau Garcia</h1>
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
