import styles from './header.module.css'
import Particles from "react-tsparticles";

export default function Header() {
    return (
        <>
            <Particles className={styles.particles} options={{
                detectRetina: true,
                particles: {
                    'number': {
                        'value': 50,
                        'density': {
                            'enable': true,
                            'value_area': 700
                        }
                    },
                    'color': {
                        'value': '#4a90e2'
                    },
                    'shape': {
                        'type': 'circle',
                        'stroke': {
                            'width': 0,
                            'color': '#4a90e2'
                        },
                        'polygon': {
                            'nb_sides': 5
                        },
                    },
                    'opacity': {
                        'value': 0.5,
                        'random': false,
                        'anim': {
                            'enable': false,
                            'speed': 1,
                            'opacity_min': 0.1,
                            'sync': false
                        }
                    },
                    'size': {
                        'value': 3,
                        'random': true,
                        'anim': {
                            'enable': false,
                            'speed': 40,
                            'size_min': 0.1,
                            'sync': false
                        }
                    },
                    'line_linked': {
                        'enable': true,
                        'distance': 150,
                        'color': '#4a90e2',
                        'opacity': 0.4,
                        'width': 1
                    },
                    'move': {
                        'enable': true,
                        'speed': 2,
                        'direction': 'none',
                        'random': false,
                        'straight': false,
                        'out_mode': 'out',
                        'bounce': false,
                        'attract': {
                            'enable': false,
                            'rotateX': 600,
                            'rotateY': 1200
                        }
                    }
                },
                interactivity: {
                    'detect_on': 'canvas',
                    'events': {
                        'onhover': {
                            'enable': true,
                            'mode': 'grab'
                        },
                        'onclick': {
                            'enable': true,
                            'mode': 'push'
                        },
                        'resize': true
                    },
                    'modes': {
                        'grab': {
                            'distance': 140,
                            'line_linked': {
                                'opacity': 1
                            }
                        },
                        'bubble': {
                            'distance': 400,
                            'size': 40,
                            'duration': 2,
                            'opacity': 8,
                            'speed': 3
                        },
                        'repulse': {
                            'distance': 200,
                            'duration': 0.4
                        },
                        'push': {
                            'particles_nb': 4
                        },
                        'remove': {
                            'particles_nb': 2
                        }
                    }
                }
            }} />
            <div className={styles.text}>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="h1 m-b-15">Arnau Garcia</h1>
                        <h1 className={styles.h5}>

                        </h1>
                    </div>
                </div>
            </div>
            <div className="mouse-icon">
                <div className="wheel"/>
            </div>
        </>
    )
}
