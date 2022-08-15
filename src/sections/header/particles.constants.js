export const particlesConstants = {
    detectRetina: true,
    fullScreen: true,
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
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    }
}
