import {useEffect, useRef, useState} from "react";

export default function Skill({label, value = 0, initialValue = 0}) {

    const [state, setState] = useState({progress: initialValue})

    const containerRef = useRef(null);
    const observer = new IntersectionObserver(animateProgress)

    useEffect(() => {
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            observer.unobserve(containerRef.current);
        }
    })

    function animateProgress() {
        const interval = setInterval(frame, 10);

        function frame() {
            if (progress >= value + 1) {
                clearInterval(interval);
            } else {
                console.log(progress)
                progress++;
                // setState({progress: progress});
            }
        }
    }

    return (
        <div className="progress-item" ref={containerRef}>
            <div className="progress-title">{label}</div>
            <div className="progress">
                <div className="progress-bar progress-bar-brand" style={{width: progress}}/>
            </div>
        </div>)
}
